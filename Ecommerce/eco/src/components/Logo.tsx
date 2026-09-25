type LogoProps = { light?: boolean; size?: number };

export function LogoMark({ light = false, size = 28 }: LogoProps) {
  const leaf = light ? '#e8d4c8' : '#c4a574';
  const stem = light ? '#f8fafc' : '#0f3d56';
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden className="shrink-0">
      <path fill={leaf} d="M16 4c-5.2 6.4-8 11.8-8 16.4C8 25.6 11.6 29 16 29c1.6 0 3.1-.4 4.3-1.2C16.8 25.4 14 20.4 14 15.2 14 10.8 15 7.2 16 4Z" />
      <path fill={stem} d="M16 4c5.2 6.4 8 11.8 8 16.4C24 25.6 20.4 29 16 29c-.7 0-1.4-.1-2-.3 3.2-2.4 5.5-7.2 5.5-12.5 0-4.8-1.2-8.7-3.5-12.2Z" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${light ? 'text-white' : 'text-brand'}`}>
      <LogoMark light={light} />
      <span className="text-[18px] font-extrabold tracking-[0.14em]">VELUNE</span>
    </span>
  );
}
