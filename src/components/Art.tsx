export function Avatar({ seed, className = '' }: { seed: number; className?: string }) {
  const h = (seed * 37) % 360
  return (
    <svg viewBox="0 0 200 240" className={className} role="img" aria-label="Illustration de profil fictif" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`av${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={`hsl(${h} 35% 30%)`} />
          <stop offset="1" stopColor={`hsl(${(h + 40) % 360} 40% 16%)`} />
        </linearGradient>
      </defs>
      <rect width="200" height="240" fill={`url(#av${seed})`} />
      <circle cx="100" cy="92" r="40" fill="rgba(255,255,255,.28)" />
      <path d="M20 240c0-56 36-84 80-84s80 28 80 84z" fill="rgba(255,255,255,.2)" />
    </svg>
  )
}

export function NewsArt({ seed, className = '' }: { seed: number; className?: string }) {
  const h = 205 + seed * 9
  return (
    <svg viewBox="0 0 400 220" className={className} role="img" aria-label="Illustration d’exemple" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="220" fill={`hsl(${h} 55% 18%)`} />
      <circle cx={80 + seed * 40} cy="120" r="90" fill={`hsl(${h} 50% 28%)`} />
      <circle cx={330 - seed * 20} cy="60" r="55" fill={`hsl(${h + 20} 55% 36%)`} opacity=".7" />
      <path d={`M0 ${170 - seed * 4} Q 120 ${110 + seed * 6} 230 ${160} T 400 ${130 + seed * 3} V220 H0z`} fill="rgba(255,255,255,.1)" />
      <circle cx={360 - seed * 15} cy="30" r="6" fill="#c8102e" />
    </svg>
  )
}

export function GlobeArt() {
  const nodes = [[90, 120], [170, 70], [250, 110], [310, 190], [190, 250], [110, 230], [230, 180]]
  return (
    <svg viewBox="0 0 400 320" className="h-full w-full" role="img" aria-label="Réseau de coopération internationale">
      <g fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1.2">
        <circle cx="200" cy="160" r="130" />
        <ellipse cx="200" cy="160" rx="130" ry="50" />
        <ellipse cx="200" cy="160" rx="55" ry="130" />
        <path d="M70 160h260M200 30v260" />
      </g>
      <g stroke="#7fb0ea" strokeWidth="1.5" opacity=".9">
        {nodes.slice(1).map((n, i) => <line key={i} x1={nodes[i][0]} y1={nodes[i][1]} x2={n[0]} y2={n[1]} />)}
        <line x1="90" y1="120" x2="230" y2="180" />
      </g>
      {nodes.map((n, i) => <circle key={i} cx={n[0]} cy={n[1]} r={i === 2 ? 8 : 5} fill={i === 2 ? '#c8102e' : '#ffffff'} />)}
    </svg>
  )
}
