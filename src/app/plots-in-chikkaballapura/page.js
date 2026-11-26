import React from 'react';
import { CorridorRoute, corridorMetadata } from '../../lib/corridorSeo';

export const metadata = corridorMetadata('plots-in-chikkaballapura', [
  'plots in chikkaballapura',
  'villa plots in chikkaballapura',
  'plots near nandi hills',
  'plots for sale chikkaballapura',
  'nandi hills villa plots',
  'cudda approved plots',
  'plots near bangalore airport'
]);

export default function ChikkaballapuraPlotsPage() {
  return <CorridorRoute slug="plots-in-chikkaballapura" />;
}
