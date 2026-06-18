interface ImagePlaceholderProps {
  label: string
  className?: string
  aspect?: string
}

/**
 * Stand-in for real image assets (logo, hero background, posters, sponsor
 * logos, leaderboard graphic). Swap these out by dropping real files into
 * `src/assets` and replacing the relevant component with an <img> tag.
 */
export default function ImagePlaceholder({ label, className = '', aspect }: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-dashed border-white/20 text-white/35 text-[11px] font-medium uppercase tracking-wider text-center px-3 ${className}`}
      style={aspect ? { aspectRatio: aspect } : undefined}
      role="img"
      aria-label={label}

    >{label && label==="Hero background"?
      <img src="/src/assets/images/hero.png" alt="BotLeague Hero" className="w-full h-auto"></img>:
      label==="Your Path to the League"?
      <img src="/src/assets/images/Your Path.jpeg" alt="Your path league" className="w-full h-auto"></img>:
      label==="Robo Race"?
      <img src="/src/assets/images/poster1.jpg" alt="Your path league" className="w-full h-full object-cover"></img>:
      label==="Line Follower"?
      <img src="/src/assets/images/poster2.jpg" alt="Your path league" className="w-full h-full object-cover"></img>:
      label==="RC Racing"?
      <img src="/src/assets/images/poster3.jpg" alt="Your path league" className="w-full h-full object-cover"></img>:
      label==="FPV Drone Racing & Autonomy"?
      <img src="/src/assets/images/poster4.jpg" alt="Your path league" className="w-full h-full object-cover"></img>:
      label==="Robo Hockey"?
      <img src="/src/assets/images/poster5.jpg" alt="Your path league" className="w-full h-full object-cover"></img>:
      label==="Robo War"?
      <img src="/src/assets/images/poster6.jpg" alt="Your path league" className="w-full h-full object-cover"></img>:
      <img src={`/src/assets/images/${label}.png`} alt="Your path league" className="w-full h-full object-cover"></img>  

    }
  
    </div>
  )
}
