import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: 'A Trading Tool / Dashboard', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    emailjs.send(
      'service_3xj4upn',
      'template_3djrh79',
      {
        name: form.name,
        email: form.email,
        type: form.type,
        message: form.message,
      },
      '_eC0X3BGSqzhgJYOS'  // 👈 replace this with your EmailJS public key
    )
    .then(() => {
      setSent(true);
      setLoading(false);
      setForm({ name: '', email: '', type: 'A Trading Tool / Dashboard', message: '' });
      setTimeout(() => setSent(false), 5000);
    })
    .catch(() => {
      setLoading(false);
      setError('Something went wrong. Please email davtrader2@gmail.com directly.');
    });
  };

  return (
    <section id="contact" className="section bg-navy relative">
      <div className="absolute top-0 inset-x-0 divider"/>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="tag">Contact</div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Let's Build<br/><span className="grad-text">Something Real.</span>
            </h2>
            <p className="text-white/45 text-lg leading-relaxed mb-10">
              Trader needing a tool. Founder building in finance. Educator who needs a website. Whatever it is I want to hear about it.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: '✉', label: 'Email', val: 'davtrader2@gmail.com', href: 'mailto:davtrader2@gmail.com', color: '#6366f1' },
                { icon: '🌐', label: 'Linktree', val: 'linktr.ee/Tochi_mmxm', href: 'https://linktr.ee/Tochi_mmxm', color: '#06b6d4' },
              ].map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
                  className="flex items-center gap-4 card rounded-xl p-4 card-hover group">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                    style={{background:`${c.color}15`,border:`1px solid ${c.color}25`}}>
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-mono text-[9px] tracking-wider text-white/30 uppercase mb-0.5">{c.label}</div>
                    <div className="text-sm text-white/60 group-hover:text-white transition-colors">{c.val}</div>
                  </div>
                  <svg className="ml-auto text-white/20 group-hover:text-white/50 transition-colors" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              {[
                { l: '𝕏 Twitter', h: 'https://twitter.com/Tochi_mmxm' },
                { l: '⌥ GitHub', h: 'https://github.com/tochukwu5' },
              ].map(s => (
                <a key={s.l} href={s.h} target="_blank" rel="noreferrer"
                  className="text-xs font-mono px-4 py-2 card rounded-full text-white/40 hover:text-white hover:border-indigo/30 transition-all">
                  {s.l}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="card rounded-2xl p-8" style={{background:'rgba(255,255,255,0.02)'}}>
            <h3 className="font-display text-xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={submit} className="space-y-4">
              <div className="grid lg:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[9px] tracking-wider text-white/30 uppercase block mb-2">Name</label>
                  <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    placeholder="Your name"
                    className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all"
                    style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)'}}
                    onFocus={e => e.target.style.borderColor='rgba(99,102,241,0.5)'}
                    onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.08)'}/>
                </div>
                <div>
                  <label className="font-mono text-[9px] tracking-wider text-white/30 uppercase block mb-2">Email</label>
                  <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                    placeholder="your@email.com"
                    className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all"
                    style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)'}}
                    onFocus={e => e.target.style.borderColor='rgba(99,102,241,0.5)'}
                    onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.08)'}/>
                </div>
              </div>

              <div>
                <label className="font-mono text-[9px] tracking-wider text-white/30 uppercase block mb-2">I need</label>
                <select value={form.type} onChange={e => setForm({...form, type: e.target.value})}
                  className="w-full rounded-lg px-4 py-3 text-sm text-white outline-none transition-all"
                  style={{background:'rgba(0,0,0,0.8)',border:'1px solid rgba(255,255,255,0.08)'}}>
                  <option value="A Trading Tool / Dashboard">A Trading Tool / Dashboard</option>
                  <option value="A Trading Coach Website">A Trading Coach Website</option>
                  <option value="A Fintech MVP / App">A Fintech MVP / App</option>
                  <option value="1-on-1 Trading Mentorship">1-on-1 Trading Mentorship</option>
                  <option value="A Free Discovery Call">A Free Discovery Call</option>
                  <option value="Something Else">Something Else</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-[9px] tracking-wider text-white/30 uppercase block mb-2">Message</label>
                <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                  placeholder="Tell me about your project or what you're looking for..."
                  className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 outline-none resize-none transition-all"
                  style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)'}}
                  onFocus={e => e.target.style.borderColor='rgba(99,102,241,0.5)'}
                  onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.08)'}/>
              </div>

              {error && (
                <p className="text-red-400 text-xs font-mono bg-red-400/5 border border-red-400/20 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              <button type="submit" disabled={loading}
                className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all"
                style={sent
                  ? {background:'rgba(16,185,129,0.12)',border:'1px solid rgba(16,185,129,0.3)',color:'#10b981'}
                  : loading
                  ? {background:'rgba(99,102,241,0.3)',color:'rgba(255,255,255,0.4)',cursor:'not-allowed'}
                  : {background:'linear-gradient(135deg,#6366f1,#4f46e5)',color:'white'}}>
                {sent ? '✓ Message sent successfully!' : loading ? 'Sending...' : 'Send Message →'}
              </button>
            </form>

            <div className="mt-5 pt-5 border-t border-white/5 text-center">
              <p className="text-white/25 text-xs mb-3">Prefer to talk?</p>
              <a href="https://calendly.com/davtrader2/30min" target="_blank" rel="noreferrer"
                className="btn-secondary text-xs w-full justify-center">
                Book Free 30-Min Call (Google Meet)
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
          <img src="/favicon.svg" alt="TraderDav logo" className="w-8 h-8" />
            <div>
              <div className="font-display text-sm font-bold text-white">Tochi_mmxm</div>
              <div className="font-mono text-[9px] text-indigo-light/40">Finance Developer</div>
            </div>
          </div>
          <div className="flex gap-6">
            {[
              {l:'Twitter',h:'https://twitter.com/Tochi_mmxm'},
              {l:'GitHub',h:'https://github.com/tochukwu5'},
              {l:'Linktree',h:'https://linktr.ee/Tochi_mmxm'},
            ].map(s => (
              <a key={s.l} href={s.h} target="_blank" rel="noreferrer"
                className="font-mono text-[10px] text-white/25 hover:text-white/60 transition-colors">{s.l}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}