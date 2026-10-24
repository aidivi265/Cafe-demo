import Link from "next/link";
import { address, businessName, mapUrl, navigation, phone, phoneHref } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-coal px-5 py-14 text-ink lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-bold">RICHIE RICH</p>
          <p className="mt-2 max-w-xs text-sm leading-6 text-muted">PlayStation gaming, 8-ball pool, and a rooftop cafe in Budh Vihar, Delhi.</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">Explore</p>
          <div className="mt-4 grid gap-2 text-sm text-muted">
            {navigation.map((item) => <Link key={item.href} href={item.href} className="hover:text-ink">{item.label}</Link>)}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">Find us</p>
          <p className="mt-4 text-sm leading-6 text-muted">{address}</p>
          <a href={phoneHref} className="mt-3 block text-sm font-bold text-ink hover:text-blue">{phone}</a>
          <a href={mapUrl} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm font-bold text-blue underline underline-offset-4">Open in Google Maps</a>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-ink/15 pt-5 text-xs text-ink/45">
        <span>© {new Date().getFullYear()} {businessName}</span>
      </div>
    </footer>
  );
}
