import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/button";
import { address, businessCategory, businessName, hoursNote, mapUrl, phone, phoneHref } from "@/lib/site-data";

export const metadata = {
  title: "Visit Richie Rich in Budh Vihar",
  description: "Find Richie Rich Gaming & Cafe, a gaming lounge and pool billiards club in Budh Vihar, Delhi."
};

export default function VisitPage() {
  return (
    <>
      <PageIntro eyebrow="Find Richie Rich" title="Plan your visit." description={`Find ${businessName}, a ${businessCategory.toLowerCase()}, at P-15, Budh Vihar Phase I, Delhi.`} tone="blue" />
      <section className="ambient-blue px-5 py-16 lg:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2"><div className="rounded-panel border border-line bg-surface p-8 sm:p-10"><p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">Address</p><h2 className="mt-8 max-w-md font-display text-4xl font-bold leading-tight">{address}</h2><Button href={mapUrl} external className="mt-10">Open Google Maps ↗</Button></div><div className="rounded-panel border border-line bg-surface-raised p-8 sm:p-10"><p className="text-xs font-bold uppercase tracking-[0.2em] text-amber">Before you visit</p><h2 className="mt-8 font-display text-4xl font-bold leading-tight">Call ahead for current hours.</h2><p className="mt-5 leading-7 text-muted">{hoursNote}</p><a href={phoneHref} className="mt-10 block text-2xl font-bold text-amber underline decoration-1 underline-offset-8">{phone}</a></div></div></section>
    </>
  );
}
