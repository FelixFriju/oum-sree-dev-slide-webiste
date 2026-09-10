import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { brands, getBrand } from '../../../lib/brands';
export function generateStaticParams(){return brands.map(b=>({slug:b.slug}))}
export default async function BrandDetail({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const b=getBrand(slug);if(!b)return notFound();return <main className="inner-page brand-detail"><div className="detail-number">BRAND / {b.category.toUpperCase()}</div><section><div className="detail-mark">{b.logo}</div><h1>{b.name}</h1><p className="detail-short">{b.short}</p><div className="detail-line"/><p className="detail-body">{b.description}</p><div className="detail-actions"><Link href="/brands"><ArrowLeft/> ALL BRANDS</Link><Link href="/contact">ENQUIRE <ArrowRight/></Link></div></section></main>}
