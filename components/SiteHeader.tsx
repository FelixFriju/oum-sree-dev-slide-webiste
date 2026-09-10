import Link from 'next/link';
import Menu from './Menu';
export default function SiteHeader(){return <header className="site-header"><Link href="/" className="monogram" aria-label="Home">OSD</Link><Menu/></header>}
