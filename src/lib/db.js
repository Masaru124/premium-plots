import pg from 'pg';
import { INITIAL_PROJECTS, INITIAL_LEADS } from '../data/plotsData.js';

const { Pool } = pg;

let pool;

export function getPool() {
  if (!pool) {
    const rawUrl = process.env.DATABASE_URL || '';
    const connectionString = rawUrl
      .replace('&channel_binding=require', '')
      .replace('channel_binding=require&', '');

    pool = new Pool({
      connectionString,
      ssl: {
        rejectUnauthorized: false
      },
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000
    });
  }
  return pool;
}

// Initialize tables and seed default data if database is fresh
export async function initDatabase() {
  const p = getPool();
  const client = await p.connect();

  try {
    // 1. Create Projects Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS projects (
        id VARCHAR(100) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        property_type VARCHAR(100) NOT NULL,
        group_name VARCHAR(150),
        tagline TEXT,
        developer VARCHAR(255),
        location VARCHAR(255),
        corridor_id VARCHAR(100),
        construction_status VARCHAR(100),
        developer_phone VARCHAR(50),
        whatsapp_phone VARCHAR(50),
        price_range VARCHAR(150),
        start_price BIGINT,
        formatted_start_price VARCHAR(100),
        dimensions JSONB,
        total_plots INT,
        available_plots INT,
        rera_id VARCHAR(150),
        approval_type VARCHAR(150),
        bank_approvals JSONB,
        hero_image TEXT,
        gallery_images JSONB,
        overview TEXT,
        highlights JSONB,
        landmarks JSONB,
        layout_grid JSONB,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `);

    // 2. Create Leads Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS leads (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        email VARCHAR(150),
        project_title VARCHAR(255),
        visit_date VARCHAR(50),
        visit_time VARCHAR(50),
        cab_pickup BOOLEAN DEFAULT FALSE,
        pickup_location TEXT,
        status VARCHAR(50) DEFAULT 'Confirmed',
        created_at VARCHAR(100) DEFAULT NOW()::text
      );
    `);

    // 3. Seed Projects if empty or missing Oriaiyan projects
    const checkProjects = await client.query('SELECT COUNT(*) FROM projects WHERE id = $1', ['project-oriaiyan-signature-plots']);
    if (parseInt(checkProjects.rows[0].count, 10) === 0) {
      // Clear legacy sample data to keep clean roster
      await client.query('DELETE FROM projects');
      
      for (const proj of INITIAL_PROJECTS) {
        await client.query(`
          INSERT INTO projects (
            id, title, slug, property_type, group_name, tagline, developer,
            location, corridor_id, construction_status, developer_phone,
            whatsapp_phone, price_range, start_price, formatted_start_price,
            dimensions, total_plots, available_plots, rera_id, approval_type,
            bank_approvals, hero_image, gallery_images, overview, highlights,
            landmarks, layout_grid
          ) VALUES (
            $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14,
            $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27
          ) ON CONFLICT (id) DO UPDATE SET
            title = EXCLUDED.title,
            developer = EXCLUDED.developer,
            group_name = EXCLUDED.group_name,
            location = EXCLUDED.location,
            price_range = EXCLUDED.price_range,
            start_price = EXCLUDED.start_price,
            formatted_start_price = EXCLUDED.formatted_start_price,
            dimensions = EXCLUDED.dimensions,
            hero_image = EXCLUDED.hero_image,
            overview = EXCLUDED.overview,
            highlights = EXCLUDED.highlights;
        `, [
          proj.id,
          proj.title,
          proj.slug,
          proj.propertyType,
          proj.groupName || '',
          proj.tagline || '',
          proj.developer || '',
          proj.location || '',
          proj.corridorId || '',
          proj.constructionStatus || 'Ready for Construction',
          proj.developerPhone || '+91 8431909508',
          proj.whatsappPhone || '+91 8431909508',
          proj.priceRange || '',
          proj.startPrice || 0,
          proj.formattedStartPrice || '',
          JSON.stringify(proj.dimensions || []),
          proj.totalPlots || 100,
          proj.availablePlots || 30,
          proj.reraId || '',
          proj.approvalType || '',
          JSON.stringify(proj.bankApprovals || []),
          proj.heroImage || '',
          JSON.stringify(proj.galleryImages || []),
          proj.overview || '',
          JSON.stringify(proj.highlights || []),
          JSON.stringify(proj.landmarks || []),
          JSON.stringify(proj.layoutGrid || [])
        ]);
      }
    }

    // 4. Seed sample leads if empty
    const checkLeads = await client.query('SELECT COUNT(*) FROM leads');
    if (parseInt(checkLeads.rows[0].count, 10) === 0) {
      for (const lead of INITIAL_LEADS) {
        await client.query(`
          INSERT INTO leads (
            id, name, phone, email, project_title, visit_date, visit_time,
            cab_pickup, pickup_location, status, created_at
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
          ON CONFLICT (id) DO NOTHING;
        `, [
          lead.id,
          lead.name,
          lead.phone,
          lead.email || '',
          lead.projectTitle || '',
          lead.visitDate || '',
          lead.visitTime || '',
          lead.cabPickup || false,
          lead.pickupLocation || '',
          lead.status || 'Confirmed',
          lead.createdAt || new Date().toLocaleString()
        ]);
      }
    }

  } finally {
    client.release();
  }
}
