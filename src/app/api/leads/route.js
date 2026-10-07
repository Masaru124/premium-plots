import { NextResponse } from 'next/server';
import { getPool, initDatabase } from '../../../lib/db.js';
import { INITIAL_LEADS } from '../../../data/plotsData.js';

// GET all leads from Neon DB
export async function GET() {
  try {
    await initDatabase();
    const pool = getPool();
    const result = await pool.query('SELECT * FROM leads ORDER BY created_at DESC');

    const mappedLeads = result.rows.map((row) => ({
      id: row.id,
      name: row.name,
      phone: row.phone,
      email: row.email,
      projectTitle: row.project_title,
      visitDate: row.visit_date,
      visitTime: row.visit_time,
      cabPickup: row.cab_pickup,
      pickupLocation: row.pickup_location,
      status: row.status,
      createdAt: row.created_at
    }));

    return NextResponse.json({ success: true, leads: mappedLeads });
  } catch (error) {
    console.error('Error in GET /api/leads:', error);
    return NextResponse.json({ success: false, fallback: true, leads: INITIAL_LEADS, error: error.message });
  }
}

// POST new site visit / inquiry lead
export async function POST(request) {
  try {
    await initDatabase();
    const body = await request.json();
    const pool = getPool();

    const id = body.id || `lead-${Date.now()}`;
    const createdAt = new Date().toLocaleString();

    await pool.query(`
      INSERT INTO leads (
        id, name, phone, email, project_title, visit_date, visit_time,
        cab_pickup, pickup_location, status, created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      ON CONFLICT (id) DO UPDATE SET
        status = EXCLUDED.status,
        visit_date = EXCLUDED.visit_date,
        visit_time = EXCLUDED.visit_time;
    `, [
      id,
      body.name,
      body.phone,
      body.email || '',
      body.projectTitle || '',
      body.visitDate || '',
      body.visitTime || '',
      body.cabPickup || false,
      body.pickupLocation || '',
      body.status || 'Confirmed',
      createdAt
    ]);

    return NextResponse.json({ success: true, id, message: 'Lead saved in Neon DB successfully!' });
  } catch (error) {
    console.error('Error in POST /api/leads:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// PATCH update lead status
export async function PATCH(request) {
  try {
    const body = await request.json();
    const { leadId, status } = body;

    const pool = getPool();
    await pool.query(`
      UPDATE leads
      SET status = $1
      WHERE id = $2
    `, [status, leadId]);

    return NextResponse.json({ success: true, message: 'Lead status updated in Neon DB' });
  } catch (error) {
    console.error('Error in PATCH /api/leads:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
