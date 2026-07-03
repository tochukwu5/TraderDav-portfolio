import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-9 h-9">
        <img src="/favicon.svg" alt="TraderDav logo" className="w-full h-full" />
      </div>
      <div className="leading-none">
        <div className="font-display text-base font-bold text-white tracking-wide">TraderDav</div>
        <div className="font-mono text-[9px] text-indigo-light/60 tracking-widest">FINANCE DEV</div>
      </div>
    </div>
  );
}

const NAV_LINKS = ['About', 'Services', 'Portfolio', 'Results', 'Mentorship', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-navy-900/90 backdrop-blur-xl border-b border-white/5' : ''}`}>
      <div className="container flex items-center justify-between h-16">
        <Logo/>
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(l => (
            <Link key={l} to={l.toLowerCase()} smooth duration={700} offset={-70}
              className="px-4 py-2 text-sm text-white/50 hover:text-white rounded-lg hover:bg-white/5 cursor-pointer transition-all font-medium">
              {l}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="https://calendly.com/davtrader2/30min" target="_blank" rel="noreferrer" className="btn-secondary text-xs py-2 px-4">
            Book Call
          </a>
         <Link to="contact" smooth={true} duration={700} offset={-70} className="btn-primary text-xs py-2 px-4 cursor-pointer">
  Get in Touch
</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white/60 hover:text-white p-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-navy-800/98 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-1">
          {NAV_LINKS.map(l => (
            <Link key={l} to={l.toLowerCase()} smooth duration={700} offset={-70}
              onClick={() => setOpen(false)}
              className="py-3 px-4 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer transition-all">
              {l}
            </Link>
          ))}
          <div className="flex gap-3 mt-4 pt-4 border-t border-white/5">
           <Link to="contact" smooth={true} duration={700} offset={-70} className="btn-primary text-xs py-2 px-4 cursor-pointer">
  Get in Touch
</Link>
          </div>
        </div>
      )}
    </header>
  );
}
