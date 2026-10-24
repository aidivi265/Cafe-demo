type VisualFrameProps = {
  type: "gaming" | "pool" | "cafe";
  label: string;
  compact?: boolean;
};

const visuals = {
  gaming: {
    className: "bg-[linear-gradient(90deg,rgba(8,10,13,.84),rgba(8,10,13,.18)),url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center",
    mark: "///",
    caption: "PLAY / COMPETE / REPEAT"
  },
  pool: {
    className: "bg-[linear-gradient(90deg,rgba(8,10,13,.8),rgba(8,10,13,.18)),url('https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center",
    mark: "08",
    caption: "AIM / SET / BREAK"
  },
  cafe: {
    className: "bg-[linear-gradient(90deg,rgba(8,10,13,.76),rgba(8,10,13,.12)),url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center",
    mark: "☕",
    caption: "PAUSE / UNWIND / STAY"
  }
};

export function VisualFrame({ type, label, compact = false }: VisualFrameProps) {
  const visual = visuals[type];
  return (
    <div role="img" aria-label={`${label}. Temporary demo image; replace with client-approved venue photography before launch.`} className={`${visual.className} relative flex ${compact ? "min-h-48" : "min-h-[19rem]"} overflow-hidden rounded-panel border border-line p-6 shadow-soft`}>
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="relative mt-auto flex w-full items-end justify-between">
        <span className="font-display text-6xl font-bold tracking-[-0.08em] text-white/90">{visual.mark}</span>
        <span className="text-[10px] font-bold tracking-[0.2em] text-white/55">{visual.caption}</span>
      </div>
    </div>
  );
}
