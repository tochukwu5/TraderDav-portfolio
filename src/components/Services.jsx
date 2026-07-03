import { Link } from 'react-scroll';

const SERVICES = [
  {
    num: '01', title: 'Trading Tools & Dashboards',
    desc: 'Custom financial tools built by someone who actually trades. Prop firm rule trackers, trade journals, signal systems, algo dashboards, and multi-account PnL platforms.',
    items: ['Prop Firm Drawdown Dashboards','Multi-Account PnL Trackers','Trade Journal Applications','TradingView Webhook Bots','Signal Subscription Platforms','Algo Bot Frontend Dashboards'],
    badge: 'Most In Demand', badgeColor: '#6366f1', featured: true,
  },
  {
    num: '02', title: 'Fintech MVPs & Startup Apps',
    desc: 'Full-stack MERN applications for early-stage fintech and crypto startups. Clean architecture, fast delivery, production-ready from day one.',
    items: ['Full MERN Stack Applications','Real-Time Data Interfaces','Crypto & On-Chain Analytics','DeFi Platform Frontends','REST & WebSocket API Integration','Cloud Deployment & DevOps'],
    badge: null, featured: false,
  },
  {
    num: '03', title: 'Trading Coach Websites',
    desc: 'Professional web presence for trading educators — conversion-focused design, booking systems, course portals, and everything needed to turn visitors into paying students.',
    items: ['Coaching & Mentorship Pages','Course & Program Portals','Online Booking Systems','Student Progress Dashboards','SEO Optimized Structure','Mobile-First Responsive Design'],
    badge: null, featured: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-navy relative">
      <div className="absolute top-0 inset-x-0 divider"/>
      <div className="container">
        <div className="text-center mb-16">
          <div className="tag justify-center">What I Build</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Finance-First <span className="grad-text">Development</span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            Every service is purpose-built for financial markets. No generalist work only specialist solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((s, i) => (
            <div key={i} className={`relative card card-hover rounded-xl p-8 flex flex-col ${s.featured ? 'glow-indigo' : ''}`}
              style={s.featured ? {background:'rgba(99,102,241,0.06)',borderColor:'rgba(99,102,241,0.25)'} : {}}>
              {s.badge && (
                <div className="absolute -top-3 left-6">
                  <span className="text-[10px] font-mono font-bold tracking-wider px-3 py-1 rounded-full text-white"
                    style={{background:'linear-gradient(135deg,#6366f1,#4f46e5)'}}>
                    {s.badge}
                  </span>
                </div>
              )}
              <div className="font-mono text-4xl font-bold mb-4" style={{color:'rgba(99,102,241,0.2)'}}>{s.num}</div>
              <h3 className="font-display text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2.5 mt-auto">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-white/55">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke={s.featured ? '#6366f1' : '#334155'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="card rounded-2xl p-8 md:p-12" style={{background:'linear-gradient(135deg,rgba(99,102,241,0.08),rgba(6,182,212,0.04))'}}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">Have something specific in mind?</h3>
              <p className="text-white/45">Book a free 30-minute call — no pitch, no pressure. Just a real conversation about what you need.</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a href="https://calendly.com/davtrader2/30min" target="_blank" rel="noreferrer" className="btn-secondary whitespace-nowrap">Book Free Call</a>
             <Link to="contact" smooth={true} duration={700} offset={-70} className="btn-primary whitespace-nowrap cursor-pointer">
  Get Started
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
