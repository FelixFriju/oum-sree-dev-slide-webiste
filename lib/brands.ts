export type Brand = { slug:string; name:string; category:string; short:string; description:string; logo:string };
export const brands: Brand[] = [
 {slug:'philip-gm',name:'Philip GM',category:'Brand',short:'Identity, vision and long-term value.',description:'Philip GM is one of the ventures in Dr. Oum Sree Dev’s ecosystem. This detail page is ready for the official company story, milestones, services and links.',logo:'Philip GM'},
 {slug:'amirs-production-house',name:'Amirs Production House',category:'Creative',short:'Visual storytelling and production.',description:'Amirs Production House brings creative production and visual storytelling into the wider ecosystem. Replace this copy with the approved company profile and selected work.',logo:'AMIRS'},
 {slug:'mybigdealz',name:'myBigdealz.com',category:'Digital',short:'Offers, discovery and smarter savings.',description:'myBigdealz.com is a digital offers platform focused on helping people discover better deals and savings. Add the official story, features and live links here.',logo:'myBigdealz.com'},
 {slug:'globe-air-route',name:'Globe Air Route',category:'Travel',short:'Movement, routes and opportunity.',description:'Globe Air Route is a travel-focused venture within the portfolio. Add the official services, destinations, story and enquiry details here.',logo:'GLOBE AIR ROUTE'}
];
export const getBrand=(slug:string)=>brands.find(b=>b.slug===slug);
