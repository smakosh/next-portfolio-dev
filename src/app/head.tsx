import { NextSeo } from 'next-seo';
import seoConfig from '../data/next-seo.config';

export default function Head() {
  return <NextSeo {...seoConfig} useAppDir={true} />;
}
