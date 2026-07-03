const STATS = [
  { val: '$300', label: 'Coach Website Delivered', sub: 'G2S Trades — g2strades.com' },
  { val: '$50K', label: 'Funded Account Passed', sub: 'TopOne Trader — NQ Futures' },
  { val: '5+', label: 'Prop Firm Passes', sub: 'The5ers · TopOne · Others' },
  { val: '4 Days', label: 'Avg Project Delivery', sub: 'Idea to live production' },
];

export default function Testimonials() {
  return (
    <section id="results" className="section bg-navy relative">
      <div className="absolute top-0 inset-x-0 divider"/>
      <div className="container">
        <div className="text-center mb-16">
          <div className="tag justify-center">Results</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Proof, Not <span className="grad-text">Promises.</span>
          </h2>
          <p className="text-white/40 max-w-lg mx-auto">Real client reactions. Real funded accounts. Real evidence.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
          {/* Gabe chat */}
          <div className="card rounded-2xl overflow-hidden" style={{border:'1px solid rgba(16,185,129,0.2)',background:'rgba(16,185,129,0.03)'}}>
            <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/5">
              <span className="w-2 h-2 rounded-full bg-emerald pulse-dot"/>
              <span className="font-mono text-[9px] tracking-[0.15em] text-white/40 uppercase">Client Reaction</span>
              <span className="ml-auto font-mono text-[9px] text-emerald/70">G2S Trades · Gabe</span>
            </div>
            <img src="/images/testimonial/gabe_chat.jpg" alt="Client happy reaction from Gabe" className="w-full object-cover"/>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-navy" style={{background:'linear-gradient(135deg,#10b981,#059669)'}}>G</div>
                <div>
                  <div className="text-sm font-semibold text-white">Gabe — G2S Trades</div>
                  <div className="font-mono text-[9px] text-white/30">Funded Trader Mentor · 5yr Experience</div>
                </div>
                <div className="ml-auto text-emerald text-sm tracking-wider">★★★★★</div>
              </div>
              <p className="text-white/50 text-sm italic leading-relaxed">
                "Awesome thank you!" — Gabe's reaction on receiving his complete trading mentorship website at <a href="https://g2strades.com" target="_blank" rel="noreferrer" className="text-emerald">g2strades.com</a>
              </p>
            </div>
          </div>

          {/* Funded cert */}
          <div className="flex flex-col gap-6">
            <div className="card rounded-2xl overflow-hidden" style={{border:'1px solid rgba(99,102,241,0.2)',background:'rgba(99,102,241,0.03)'}}>
              <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/5">
                <span className="w-2 h-2 rounded-full pulse-dot" style={{background:'#6366f1'}}/>
                <span className="font-mono text-[9px] tracking-[0.15em] text-white/40 uppercase">Prop Firm Pass</span>
                <span className="ml-auto font-mono text-[9px] text-indigo-light/70">TopOne Trader · $50K</span>
              </div>
              <img src="/images/testimonial/funded.jpg" alt="TopOne Trader funded certificate" className="w-full object-cover"/>
              <div className="p-5">
                <p className="text-white/50 text-sm leading-relaxed">
                  Passed the $50K evaluation on TopOne Trader — NQ futures, using ICT market structure and order flow. I understand the markets I build tools for.
                </p>
              </div>
            </div>

            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div key={i} className="card card-hover rounded-xl p-5">
                  <div className="font-display text-2xl font-bold shimmer-text mb-1">{s.val}</div>
                  <div className="text-white/60 text-xs font-medium mb-1">{s.label}</div>
                  <div className="font-mono text-[9px] text-white/25">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
