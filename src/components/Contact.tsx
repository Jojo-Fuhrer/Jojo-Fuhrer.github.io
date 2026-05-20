import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Copy, CheckCheck } from 'lucide-react';

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Message de ${formData.name} via Portfolio`;
    const body = `${formData.message}\n\nRépondre à: ${formData.email}`;
    window.location.href = `mailto:sergesuusa@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sergesuusa@gmail.com',
      key: 'email',
      color: '#00d4ff',
      action: () => copyToClipboard('sergesuusa@gmail.com', 'email'),
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+221 77 454 55 75',
      key: 'phone',
      color: '#00ffea',
      action: () => copyToClipboard('+221 77 454 55 75', 'phone'),
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Cité Avion, Ouakam-Dakar',
      key: 'location',
      color: '#f5a623',
      action: () => {},
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Abdoulaye Serge Diallo',
      key: 'linkedin',
      color: '#0077b5',
      action: () => {},
    },
  ];

  return (
    <div ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[#0066cc]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#00d4ff]/20 mb-4">
            <MessageSquare className="w-4 h-4 text-[#00d4ff]" />
            <span className="text-sm font-mono text-[#00d4ff] tracking-wider">CONTACT</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Travaillons <span className="text-gradient">Ensemble</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">
            Disponible pour des stages, opportunités professionnelles et collaborations dans le domaine de la cybersécurité.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact infos */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-xl font-bold text-white mb-6">Coordonnées</h3>

            <div className="space-y-4 mb-8">
              {contacts.map(({ icon: Icon, label, value, key, color, action }) => (
                <button
                  key={key}
                  onClick={action}
                  className="w-full flex items-center gap-4 p-4 rounded-xl glass-card text-left group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                    style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-white/40 font-mono mb-0.5">{label}</div>
                    <div className="text-white/80 text-sm font-medium truncate">{value}</div>
                  </div>
                  {(key === 'email' || key === 'phone') && (
                    <div className="flex-shrink-0 text-white/30 group-hover:text-[#00d4ff] transition-colors">
                      {copied === key ? <CheckCheck className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Reference */}
            <div className="glass-card rounded-xl p-5">
              <h4 className="text-xs font-mono text-white/40 tracking-widest uppercase mb-3">Référence</h4>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center">
                  <span className="text-[#00d4ff] font-bold font-mono text-sm">M.D</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">M. Diompy</div>
                  <div className="text-[#00d4ff] text-xs">+221 77 454 55 75</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Envoyer un Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-white/40 tracking-wider uppercase mb-2">
                    Votre Nom
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jean Dupont"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#00d4ff]/50 focus:bg-white/8 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/40 tracking-wider uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jean@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#00d4ff]/50 focus:bg-white/8 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/40 tracking-wider uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Bonjour, je souhaite vous contacter pour..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#00d4ff]/50 focus:bg-white/8 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                    sent
                      ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                      : 'bg-gradient-to-r from-[#00d4ff] to-[#0066cc] text-white hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:scale-[1.02] active:scale-[0.98]'
                  }`}
                >
                  {sent ? (
                    <>
                      <CheckCheck className="w-4 h-4" />
                      Message ouvert dans votre client mail
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Envoyer le Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-sm">
          <div className="font-mono">
            &copy; 2026 <span className="text-[#00d4ff]">Abdoulaye Serge Diallo</span> — Cybersécurité
          </div>
          <div className="font-mono text-xs">
            Dakar, Sénégal
          </div>
        </div>
      </div>
    </div>
  );
}
