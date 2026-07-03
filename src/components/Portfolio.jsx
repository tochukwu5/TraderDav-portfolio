import { useState, useEffect, useRef, useCallback } from 'react';

const PROJECTS = [
  {
    title: 'SendArc', category: 'Fintech Platform', status: 'LIVE',
    desc: 'Cross-border USDC remittance platform on Arc Network (Circle). Seamless crypto-powered payments with a clean, production-grade interface.',
    img: '/images/portfolio/sendarc.png', link: 'https://sendarc.xyz',
    stack: ['React','Node.js','MongoDB','Circle CCTP','Web3'],
    color: '#6366f1',
  },
  {
    title: 'G2S Trades', category: 'Trading Coach Website', status: 'LIVE',
    desc: 'Complete coaching platform for funded trader educator Gabe. Pricing plans, booking system, and a design built to convert visitors into students.',
    img: '/images/portfolio/g2trades.png', link: 'https://g2strades.com',
    stack: ['React','Tailwind CSS','Node.js','Booking API'],
    color: '#10b981',
  },
  {
    title: 'NumerTrack', category: 'Quant Trading Tool', status: 'IN DEV',
    desc: 'Analytics dashboard for Numerai participants. Model performance tracking, tournament rankings, stake history, and correlation visualization.',
    img: '/images/portfolio/numerai.jpg', link: '#',
    stack: ['React','Recharts','Python','Numerai API'],
    color: '#06b6d4',
  },
];

const CHART_SLIDES = [
  { img: '/images/material/chart_new2.png', title: 'ICT AMD Framework', sub: 'Accumulation · Manipulation · Distribution' },
  { img: '/images/material/chart_new3.png', title: 'Order Block & Inversion', sub: 'ICT market structure · HTF arrays' },
  { img: '/images/material/chart3.png', title: 'NQ Futures Session', sub: 'Kill zone analysis · NY session' },
  { img: '/images/material/chart_new1.jpg', title: 'Quantitative Data Analysis', sub: 'ML model · Python data pipeline' },
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const timer = useRef(null);

  const go = useCallback((dir) => {
    setCurrent(c => (c + dir + CHART_SLIDES.length) % CHART_SLIDES.length);
  }, []);

  useEffect(() => {
    timer.current = setInterval(() => go(1), 3000);
    return () => clearInterval(timer.current);
  }, [go]);

  const pause = () => clearInterval(timer.current);

  return (
    <div className="relative overflow-hidden rounded-xl border border-white/5 w-full" onMouseEnter={pause}>
      <div className="flex" style={{ transform: `translateX(-${current * 100}%)`, transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)' }}>
        {CHART_SLIDES.map((s, i) => (
          <div key={i} className="min-w-full relative">
            <img src={s.img} alt={s.title} className="w-full h-72 md:h-[480px] lg:h-[560px] object-cover object-center  "/>
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent"/>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="font-display text-lg font-bold text-white mb-1">{s.title}</div>
              <div className="font-mono text-xs text-white/40">{s.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => { pause(); go(-1); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all"
        style={{background:'rgba(5,8,16,0.8)',border:'1px solid rgba(255,255,255,0.1)'}}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button onClick={() => { pause(); go(1); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all"
        style={{background:'rgba(5,8,16,0.8)',border:'1px solid rgba(255,255,255,0.1)'}}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      <div className="absolute bottom-4 right-6 flex gap-1.5">
        {CHART_SLIDES.map((_, i) => (
          <button key={i} onClick={() => { pause(); setCurrent(i); }}
            className="h-1 rounded-full transition-all duration-300"
            style={{ width: i === current ? '20px' : '6px', background: i === current ? '#6366f1' : 'rgba(255,255,255,0.2)' }}/>
        ))}
      </div>
    </div>
  );
}

const FILTERS = [
  { key: 'all', label: 'All Projects' },
  { key: 'fintech', label: 'Fintech' },
  { key: 'tools', label: 'Trading Tools' },
  { key: 'coaching', label: 'Coaching' },
];

const CAT_MAP = { 'Fintech Platform': 'fintech', 'Quant Trading Tool': 'tools', 'Trading Coach Website': 'coaching' };

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const visible = PROJECTS.filter(p => filter === 'all' || CAT_MAP[p.category] === filter);

  return (
    <section id="portfolio" className="section bg-navy-900 relative">
      <div className="absolute top-0 inset-x-0 divider"/>
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="tag">Portfolio</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              Live <span className="grad-text">Projects</span>
            </h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {FILTERS.map(f => (
              <button key={f.key} onClick={() => setFilter(f.key)}
                className="text-xs font-mono px-4 py-2 rounded-full border transition-all"
                style={filter === f.key
                  ? {background:'rgba(99,102,241,1)',borderColor:'#6366f1',color:'white',fontWeight:700}
                  : {background:'transparent',borderColor:'rgba(255,255,255,0.08)',color:'rgba(255,255,255,0.4)'}}>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {visible.map((p, i) => (
            <div key={i} className="card card-hover rounded-xl overflow-hidden flex flex-col group">
              <div className="relative overflow-hidden" style={{height:'200px'}}>
                <img src={p.img} alt={p.title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"/>
                <div className="absolute inset-0" style={{background:'linear-gradient(to top, rgba(5,8,16,0.9) 0%, transparent 60%)'}}/>
                <div className={`absolute top-3 right-3 font-mono text-[9px] tracking-wider px-2.5 py-1 rounded-full border ${p.status === 'LIVE' ? 'text-emerald border-emerald/30 bg-emerald/10' : 'text-white/40 border-white/10 bg-white/5'}`}>
                  {p.status === 'LIVE' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald mr-1.5 pulse-dot"/>}
                  {p.status}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="font-mono text-[9px] tracking-wider mb-2" style={{color: p.color}}>{p.category.toUpperCase()}</div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.stack.map(t => (
                    <span key={t} className="text-[10px] font-mono px-2 py-1 rounded-md border border-white/8 text-white/35" style={{background:'rgba(255,255,255,0.02)'}}>
                      {t}
                    </span>
                  ))}
                </div>
                <a href={p.link} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{color: p.color}}>
                  {p.status === 'LIVE' ? 'View Live Site' : 'Coming Soon'}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Chart carousel */}
        <div className="mb-4">
          <div className="tag">Market Analysis</div>
          <h3 className="font-display text-2xl font-bold text-white mb-8">
            The Markets I Operate In
          </h3>
          <Carousel/>
        </div>
      </div>
    </section>
  );
}
