const WHAT_I_DO = [
  { icon: '⬡', title: 'Financial Tool Builder', desc: 'Prop firm dashboards, trading journals, signal systems, crypto analytics built by someone who understands both the markets and the code.', color: '#6366f1' },
  { icon: '◈', title: 'Fintech Developer', desc: 'Full MERN stack applications for early-stage fintech startups. MVP to production in days.', color: '#06b6d4' },
  { icon: '◇', title: 'ICT Trading Mentor', desc: 'One-on-one mentorship in ICT market structure, order flow, and institutional concepts across NQ, ES, Crypto, and Forex.', color: '#10b981' },
  { icon: '○', title: 'Coach Website Specialist', desc: 'Professional websites for trading educators booking systems, course portals, and conversion-focused design.', color: '#f59e0b' },
];

export default function About() {
  return (
    <section id="about" className="section bg-navy-900 relative">
      <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none"/>
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — visual */}
          <div className="relative">
            {/* Main photo frame */}
            <div className="relative">
              <div className="absolute -inset-px rounded-xl" style={{background:'linear-gradient(135deg,rgba(99,102,241,0.4),rgba(6,182,212,0.2),rgba(16,185,129,0.1))'}}/>
              <div className="relative rounded-xl overflow-hidden bg-navy-700">
                <img src="/images/photo/tochi.jpg" alt="Tochi — TraderDav"
                  className="w-full aspect-[4/5] object-cover object-top opacity-90" style={{filter:'saturate(0.9) contrast(1.05)'}}/>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent"/>

                {/* Floating badge bottom left */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="card p-4 backdrop-blur-sm" style={{background:'rgba(5,8,16,0.85)'}}>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald pulse-dot flex-shrink-0"/>
                      <div>
                        <div className="font-mono text-[9px] tracking-[0.15em] text-white/40 uppercase mb-0.5">Currently</div>
                        <div className="text-sm font-semibold text-white">Available for Projects & Mentorship</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating chart card */}
            {/* <div className="absolute -top-4 -right-4 w-40 card float overflow-hidden" style={{zIndex:10}}>
              <div className="bg-navy-700/90 backdrop-blur-sm p-1.5">
                <div className="font-mono text-[8px] text-indigo-light/60 mb-1 px-1">NQ FUTURES</div>
                <img src="/images/material/chart2.png" alt="NQ Chart" className="w-full rounded opacity-85"/>
              </div>
            </div> */}

            {/* Funded cert mini */}
            <div className="absolute -bottom-4 -right-4 w-44 card overflow-hidden" style={{zIndex:10}}>
              <div className="bg-navy-700/90 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 px-2 py-1.5 border-b border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald pulse-dot"/>
                  <span className="font-mono text-[8px] text-white/40 tracking-wider">FUNDED ACCOUNT</span>
                </div>
                <img src="/images/testimonial/funded.jpg" alt="Funded" className="w-full opacity-80"/>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div>
            <div className="tag">About Me</div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Where Finance<br/>
              <span className="grad-text">Meets Engineering.</span>
            </h2>
            <div className="space-y-4 text-white/55 leading-relaxed mb-10">
              <p>
                I'm <span className="text-white/90 font-semibold">David</span> a full-stack developer (MERN stack) and funded trader. I operate at an intersection most developers never reach: I understand the global financial environment I build for.
              </p>
              <p>
                With 4+ years in development and years actively trading financial markets, I bring domain expertise that makes every tool I build more precise. I know what a trader actually needs, because I am one.
              </p>
              <p>
                I work with <span className="text-white/90 font-medium">prop traders, fintech startups, trading educators, quantitative traders, crypto projects etc.</span> to build the tools that give them a real edge.
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mb-10">
              {[
                { label: '𝕏 Twitter', href: 'https://twitter.com/Tochi_mmxm' },
                { label: '⌥ GitHub', href: 'https://github.com/tochukwu5' },
                { label: '⊕ Linktree', href: 'https://linktr.ee/Tochi_mmxm' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  className="text-sm px-4 py-2 card card-hover text-white/50 hover:text-white transition-all rounded-lg">
                  {s.label}
                </a>
              ))}
            </div>

            {/* What I do grid */}
            <div className="grid lg:grid-cols-2 gap-3">
              {WHAT_I_DO.map((w, i) => (
                <div key={i} className="card card-hover p-4 rounded-xl">
                  <div className="text-xl mb-2" style={{color: w.color}}>{w.icon}</div>
                  <div className="font-semibold text-white text-sm mb-1.5">{w.title}</div>
                  <p className="text-white/40 text-xs leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
