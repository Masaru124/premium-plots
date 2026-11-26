import React from 'react';
import { CorridorRoute, corridorMetadata } from '../../lib/corridorSeo';

export const metadata = corridorMetadata('plots-in-south-bangalore', [
  'plots in south bangalore',
  'plots in jigani',
  'plots near apc circle',
  'plots on kanakapura road',
  'plots near bannerghatta road',
  'residential plots electronic city',
  'villa for sale bannerghatta road'
]);

export default function SouthBangalorePlotsPage() {
  return <CorridorRoute slug="plots-in-south-bangalore" />;
}
