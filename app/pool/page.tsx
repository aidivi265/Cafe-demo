import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/button";
import { CtaPanel } from "@/components/cta-panel";
import { VisualFrame } from "@/components/visual-frame";
import { businessName, mapUrl, phoneHref } from "@/lib/site-data";

export const metadata = {
  title: "8-Ball Pool",
  description: "Play 8-ball pool at Richie Rich Gaming & Cafe in Budh Vihar, Delhi."
};

export default function PoolPage() {
  return (
    <>
      <PageIntro eyebrow="02 / 8-ball pool" title="Line up your shot." description={`Enjoy 8-ball pool at ${businessName} in Budh Vihar, Delhi.`} tone="violet" />
      <section className="ambient-violet px-5 py-16 lg:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-end"><VisualFrame type="pool" label="Abstract 8-ball pool visual placeholder" /><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-violet">8-ball pool</p><h2 className="mt-4 font-display text-5xl font-bold leading-none tracking-tight sm:text-7xl">Take your best shot.</h2><p className="mt-6 text-base leading-8 text-muted">Play a relaxed game with friends or bring a little competition. Please call ahead for current availability and visit details.</p><div className="mt-7 flex flex-wrap gap-3"><Button href={phoneHref}>Call about pool →</Button><Button href={mapUrl} variant="secondary" external>Get directions</Button></div></div></div></section>
      <CtaPanel title="Make it a friendly rivalry." description="Call ahead for the latest availability and visit details." />
    </>
  );
}
