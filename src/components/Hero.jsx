import WebGLScene from './WebGLScene';
import { Link } from 'react-scroll';

const STATS = [
  { val: '4+', label: 'Years of Dev Experience' },
  { val: '30+', label: 'Finance Projects Shipped' },
  { val: '5+', label: 'Prop Firm Passes' },
  { val: '100%', label: 'Finance Focused' },
];

const BADGES = ['NQ Futures', 'Prop Funded', 'Fullstack Dev.', 'Mentorship', 'ICT Concepts', 'Crypto & DeFi'];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy">
      {/* WebGL */}
      <WebGLScene/>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-transparent to-navy pointer-events-none"/>
      <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-transparent to-navy/40 pointer-events-none"/>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{background:'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)'}}/>

      <div className="container relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Status */}
          <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-indigo/20 bg-indigo/5">
            {/* <span className="w-1.5 h-1.5 rounded-full bg-emerald pulse-dot"/> */}
            {/* <span className="font-mono text-[10px] tracking-[0.15em] text-indigo-light/80 uppercase">Available for new projects</span> */}
          </div>

          {/* Main headline */}
          <h1 className="font-display font-bold text-white leading-[1.05] mb-6 mt-5">
            <span className="block text-4xl md:text-6xl lg:text-7xl mb-2">Finance</span>
            <span className="block text-4xl md:text-6xl lg:text-7xl grad-text">Developer &</span>
            <span className="block text-4xl md:text-6xl lg:text-7xl text-white/90">Trading Mentor.</span>
          </h1>

          <p className="text-white/50 text-lg md:text-xl leading-relaxed mb-8 max-w-xl font-light">
            Building high-performance tools for traders, prop firms, and fintech startups.
            Mentoring traders one-on-one in ICT market structure across all financial markets.
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mb-10">
            {BADGES.map(b => (
              <span key={b} className="font-mono text-[10px] tracking-wider px-2 py-1.5 rounded-full border border-white/10 bg-white/3 text-white/40">
                {b}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-1 lg:gap-10 mb-16">
            <Link to="contact" smooth={true} duration={700} offset={-70} className="btn-primary cursor-pointer">
  Start a Project
  <svg width="10" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
</Link>
            <a href="https://calendly.com/davtrader2/30min" target="_blank" rel="noreferrer" className="btn-secondary">
              Book a Call
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 lg:flex gap-4 pt-8 border-t border-white/5">
            {STATS.map(s => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold shimmer-text">{s.val}</div>
                <div className="font-mono text-[10px] text-white/35 tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/60"/>
        <span className="font-mono text-[9px] tracking-[0.2em] text-white rotate-90 origin-center mt-2">SCROLL</span>
      </div>
    </section>
  );
}
