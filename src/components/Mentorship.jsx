const PLANS = [
  {
    id: 'mentorship', label: 'Trading Mentorship', price: '$50', period: '3 Weeks',
    desc: 'Intensive one-on-one ICT market structure mentorship. Tailored to your chart, your timeframe, your weaknesses.',
    features: ['ICT Market Structure — Full Curriculum','Order Blocks, FVGs & Liquidity Zones','Kill Zone & NY Session Trading','Live Chart Walkthroughs — Any Market','Prop Firm Evaluation Strategy','Risk & Psychology Framework','Daily Accountability Sessions','Lifetime Contact After Program ♾️'],
    cta: 'Apply Now', href: 'mailto:davtrader2@gmail.com?subject=Mentorship Application',
    accent: '#10b981', featured: false,
  },
  {
    id: 'build', label: 'Build For You', price: 'From $300', period: 'Per Project',
    desc: 'Custom financial tools, trading dashboards, fintech MVPs, and coaching websites. Clean code, fast delivery, you own everything.',
    features: ['Prop Firm Rule Dashboards','Trade Journal Web Apps','Signal & Bot Systems','Trading Coach Websites','Crypto Analytics Platforms','Fintech MVP Development','3–5 Day Delivery Average','Full Source Code Ownership'],
    cta: 'Start Project', href: 'mailto:davtrader2@gmail.com?subject=Project Inquiry',
    accent: '#6366f1', featured: true,
  },
  {
    id: 'call', label: 'Free Discovery Call', price: '$0', period: 'No obligation',
    desc: 'Not sure where to start? Book a free 30-minute Zoom or Google Meet to discuss your project or trading goals.',
    features: ['30-Min Zoom or Google Meet','Project Scope & Feasibility','Tech Stack Recommendation','Honest Timeline & Cost Estimate','Trading or Dev Q&A Welcome','No Sales Pressure — Ever','Follow-Up Written Summary','Open to Founders & Traders'],
    cta: 'Book Free Call', href: 'https://calendly.com/davtrader2/30min',
    accent: '#06b6d4', featured: false,
  },
];

export default function Mentorship() {
  return (
    <section id="mentorship" className="section bg-navy-900 relative">
      <div className="absolute top-0 inset-x-0 divider"/>
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none"/>
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="tag justify-center">Work With Me</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Mentorship &amp; <span className="grad-text">Services</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-lg">
            Clear offerings. No fluff. Whether you want to trade better or build something exceptional.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {PLANS.map((plan, i) => (
            <div key={i} className={`relative card rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${plan.featured ? 'glow-indigo' : ''}`}
              style={plan.featured ? {background:`rgba(99,102,241,0.07)`,borderColor:`rgba(99,102,241,0.3)`} : {}}>
              {plan.featured && (
                <div className="absolute -top-3 left-8">
                  <span className="text-[10px] font-mono font-bold tracking-wider px-3 py-1 rounded-full text-white" style={{background:'linear-gradient(135deg,#6366f1,#4f46e5)'}}>
                    MOST POPULAR
                  </span>
                </div>
              )}
              <div className="font-mono text-[9px] tracking-[0.15em] uppercase mb-3" style={{color: plan.accent}}>{plan.label}</div>
              <div className="mb-2">
                <span className="font-display text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-white/30 text-sm font-mono ml-2">/ {plan.period}</span>
              </div>
              <p className="text-white/45 text-sm leading-relaxed mb-6 border-b border-white/5 pb-6">{plan.desc}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-white/55">
                    <svg width="14" height="14" viewBox="0 0 14 14" className="flex-shrink-0 mt-0.5">
                      <circle cx="7" cy="7" r="6" fill="none" stroke={plan.accent} strokeWidth="1" opacity="0.4"/>
                      <path d="M4.5 7l2 2 3-3" stroke={plan.accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={plan.href} target={plan.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                className="mt-auto text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all"
                style={plan.featured
                  ? {background:`linear-gradient(135deg,#6366f1,#4f46e5)`,color:'white'}
                  : {border:`1px solid ${plan.accent}40`,color:plan.accent}}>
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* For trading mentors without websites */}
        <div className="card rounded-2xl p-6 md:p-12" style={{background:'linear-gradient(135deg,rgba(16,185,129,0.06),rgba(6,182,212,0.03))',borderColor:'rgba(16,185,129,0.15)'}}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="tag">For Trading Mentors</div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">
                Teaching Traders<br/>
                <span className="grad-text-2">Without a Website?</span>
              </h3>
              <p className="text-white/45 leading-relaxed mb-4">
                When potential students Google you, they should land on something that closes them. Not a bare Instagram profile.
              </p>
              <p className="text-white/45 leading-relaxed mb-8">
                I delivered a complete website for <span className="text-emerald font-medium">G2S Trades (Gabe)</span> at <a href="https://g2strades.com" target="_blank" rel="noreferrer" className="text-emerald underline decoration-emerald/30">g2strades.com</a> — pricing, booking, testimonials, mobile-perfect. I can do the same for your brand in 5 days.
              </p>
              <a href="mailto:davtrader2@gmail.com?subject=Trading Coach Website" className="btn-primary text-sm">
                Get Your Website →
              </a>
            </div>
            <div className="grid lg:grid-cols-2 gap-4">
              {[
                { t: 'First Impression Wins', d: 'Your website closes deals before you say a word. Without it, you lose students to anyone with a decent landing page.' },
                { t: 'Booking on Autopilot', d: 'Students book themselves. No back-and-forth DMs  your calendar fills while you are trading.' },
                { t: 'Built for Credibility', d: 'Testimonials, certifications, funded proof displayed to convert skeptical visitors into buyers.' },
                { t: 'Delivered in 4 Days', d: 'From deposit to live site in less than a week. Fast, clean, and ready to make you money.' },
              ].map((w, i) => (
                <div key={i} className="card rounded-xl p-4">
                  <div className="text-emerald text-xs font-semibold mb-2">{w.t}</div>
                  <p className="text-white/35 text-xs leading-relaxed">{w.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
