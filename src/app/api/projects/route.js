import { NextResponse } from 'next/server';
import { getPool, initDatabase } from '../../../lib/db.js';
import { INITIAL_PROJECTS } from '../../../data/plotsData.js';

// GET all projects from Neon DB
export async function GET() {
  try {
    await initDatabase();
    const pool = getPool();
    const result = await pool.query('SELECT * FROM projects ORDER BY created_at ASC');

    const mappedProjects = result.rows.map((row) => ({
      id: row.id,
      title: row.title,
      slug: row.slug,
      propertyType: row.property_type,
      groupName: row.group_name,
      tagline: row.tagline,
      developer: row.developer,
      location: row.location,
      corridorId: row.corridor_id,
      constructionStatus: row.construction_status,
      developerPhone: row.developer_phone,
      whatsappPhone: row.whatsapp_phone,
      priceRange: row.price_range,
      startPrice: Number(row.start_price),
      formattedStartPrice: row.formatted_start_price,
      dimensions: typeof row.dimensions === 'string' ? JSON.parse(row.dimensions) : row.dimensions || [],
      totalPlots: row.total_plots,
      availablePlots: row.available_plots,
      reraId: row.rera_id,
      approvalType: row.approval_type,
      bankApprovals: typeof row.bank_approvals === 'string' ? JSON.parse(row.bank_approvals) : row.bank_approvals || [],
      heroImage: row.hero_image,
      galleryImages: typeof row.gallery_images === 'string' ? JSON.parse(row.gallery_images) : row.gallery_images || [],
      overview: row.overview,
      highlights: typeof row.highlights === 'string' ? JSON.parse(row.highlights) : row.highlights || [],
      landmarks: typeof row.landmarks === 'string' ? JSON.parse(row.landmarks) : row.landmarks || [],
      layoutGrid: typeof row.layout_grid === 'string' ? JSON.parse(row.layout_grid) : row.layout_grid || []
    }));

    return NextResponse.json({ success: true, projects: mappedProjects });
  } catch (error) {
    console.error('Error in GET /api/projects:', error);
    // Fallback to in-memory initial projects if DB unavailable
    return NextResponse.json({ success: false, fallback: true, projects: INITIAL_PROJECTS, error: error.message });
  }
}

// POST new or updated project into Neon DB
export async function POST(request) {
  try {
    await initDatabase();
    const body = await request.json();
    const pool = getPool();

    const id = body.id || `project-${Date.now()}`;
    const slug = body.slug || body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    await pool.query(`
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
        property_type = EXCLUDED.property_type,
        group_name = EXCLUDED.group_name,
        tagline = EXCLUDED.tagline,
        developer = EXCLUDED.developer,
        location = EXCLUDED.location,
        corridor_id = EXCLUDED.corridor_id,
        price_range = EXCLUDED.price_range,
        start_price = EXCLUDED.start_price,
        formatted_start_price = EXCLUDED.formatted_start_price,
        dimensions = EXCLUDED.dimensions,
        hero_image = EXCLUDED.hero_image,
        overview = EXCLUDED.overview,
        highlights = EXCLUDED.highlights;
    `, [
      id,
      body.title,
      slug,
      body.propertyType || 'Open Plots',
      body.groupName || 'Independent',
      body.tagline || '',
      body.developer || '',
      body.location || '',
      body.corridorId || 'all-corridors',
      body.constructionStatus || 'Ready for Construction',
      body.developerPhone || '+91 8431909508',
      body.whatsappPhone || '+91 8431909508',
      body.priceRange || '',
      body.startPrice || 0,
      body.formattedStartPrice || '',
      JSON.stringify(body.dimensions || []),
      body.totalPlots || 100,
      body.availablePlots || 30,
      body.reraId || '',
      body.approvalType || '',
      JSON.stringify(body.bankApprovals || []),
      body.heroImage || '',
      JSON.stringify(body.galleryImages || []),
      body.overview || '',
      JSON.stringify(body.highlights || []),
      JSON.stringify(body.landmarks || []),
      JSON.stringify(body.layoutGrid || [])
    ]);

    return NextResponse.json({ success: true, id, message: 'Project saved in Neon DB successfully!' });
  } catch (error) {
    console.error('Error in POST /api/projects:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// DELETE project from Neon DB
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'Project ID is required' }, { status: 400 });
    }

    const pool = getPool();
    await pool.query('DELETE FROM projects WHERE id = $1', [id]);

    return NextResponse.json({ success: true, message: `Project ${id} deleted from Neon DB` });
  } catch (error) {
    console.error('Error in DELETE /api/projects:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// PATCH update plot status in layout grid
export async function PATCH(request) {
  try {
    const body = await request.json();
    const { projectId, layoutGrid, availablePlots } = body;

    const pool = getPool();
    await pool.query(`
      UPDATE projects
      SET layout_grid = $1, available_plots = $2
      WHERE id = $3
    `, [JSON.stringify(layoutGrid), availablePlots, projectId]);

    return NextResponse.json({ success: true, message: 'Plot status updated in Neon DB' });
  } catch (error) {
    console.error('Error in PATCH /api/projects:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
