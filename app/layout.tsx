import './globals.css';
import SiteHeader from '../components/SiteHeader';
export const metadata={title:'Dr. Oum Sree Dev',description:'Vision · Ventures · Purpose'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteHeader/>{children}</body></html>}
