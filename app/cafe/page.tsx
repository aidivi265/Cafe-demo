import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/button";
import { CtaPanel } from "@/components/cta-panel";
import { VisualFrame } from "@/components/visual-frame";
import { businessName, mapUrl, phoneHref } from "@/lib/site-data";

export const metadata = {
  title: "Rooftop Cafe",
  description: "Spend time at the rooftop cafe at Richie Rich Gaming & Cafe in Budh Vihar, Delhi."
};

export default function CafePage() {
  return (
    <>
      <PageIntro eyebrow="03 / Rooftop cafe" title="Take a break upstairs." description={`The rooftop cafe at ${businessName} offers a relaxed change of pace during your visit.`} tone="amber" />
      <section className="ambient-amber px-5 py-16 lg:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center"><VisualFrame type="cafe" label="Abstract rooftop cafe ambience visual placeholder" /><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-amber">Rooftop cafe</p><h2 className="mt-4 font-display text-5xl font-bold leading-none tracking-tight sm:text-7xl">A calmer part of the visit.</h2><p className="mt-7 max-w-xl text-base leading-8 text-muted">Take a break from gaming or make the rooftop cafe part of your time at Richie Rich. Please call ahead for current cafe details and availability.</p><div className="mt-8 flex flex-wrap gap-3"><Button href={phoneHref} variant="cafe">Call about the cafe →</Button><Button href={mapUrl} variant="secondary" external>Get directions</Button></div></div></div></section>
      <CtaPanel title="Stay for the rooftop." description="Call ahead for current cafe details and availability." variant="amber" />
    </>
  );
}
