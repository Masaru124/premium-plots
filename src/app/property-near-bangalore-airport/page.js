import React from 'react';
import { CorridorRoute, corridorMetadata } from '../../lib/corridorSeo';

export const metadata = corridorMetadata('property-near-bangalore-airport', [
  'property near bangalore airport',
  'apartments near kempegowda airport',
  'flats near bangalore airport',
  'property in devanahalli',
  'apartments in chikkajala',
  'airport road bangalore property',
  'plots near bangalore airport'
]);

export default function AirportPropertyPage() {
  return <CorridorRoute slug="property-near-bangalore-airport" />;
}
