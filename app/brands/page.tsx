import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { brands } from '../../lib/brands';
export default function Brands(){return <main className="inner-page brands-page"><section className="brands-hero"><p className="eyebrow">BRANDS / 02</p><h1>FOUR VENTURES.<br/><i>ONE VISION.</i></h1><p>Explore the ventures and creative identities connected to Dr. Oum Sree Dev.</p></section><section className="brands-list">{brands.map((b,i)=><Link href={`/brands/${b.slug}`} className="brand-row" key={b.slug}><span>0{i+1}</span><div><small>{b.category}</small><h2>{b.name}</h2><p>{b.short}</p></div><ArrowRight/></Link>)}</section><Link href="/" className="back-home"><ArrowLeft/> BACK HOME</Link></main>}
