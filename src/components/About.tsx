import { useEffect, useRef, useState } from 'react';
import { User, MapPin, Calendar, Phone, Mail, Linkedin } from 'lucide-react';

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const infos = [
    { icon: MapPin, label: 'Localisation', value: 'Cité Avion, Ouakam-Dakar' },
    { icon: Calendar, label: 'Date de naissance', value: '17 Novembre 2004' },
    { icon: Phone, label: 'Téléphone', value: '+221 77 454 55 75' },
    { icon: Mail, label: 'Email', value: 'sergesuusa@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Abdoulaye Serge Diallo' },
  ];

  return (
    <div ref={ref} className="relative py-28 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#00d4ff]/20 mb-4">
            <User className="w-4 h-4 text-[#00d4ff]" />
            <span className="text-sm font-mono text-[#00d4ff] tracking-wider">PROFIL</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            À Propos de <span className="text-gradient">Moi</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image + stats */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              {/* 3D image container */}
              <div className="relative w-full max-w-sm mx-auto perspective-card">
                <div className="card-inner rounded-2xl overflow-hidden">
                  <img
                    src="/Gemini_Generated_Image_qe4i6nqe4i6nqe4i.png"
                    alt="Abdoulaye Serge Diallo"
                    className="w-full h-96 object-cover object-top rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020818]/80 via-transparent to-transparent rounded-2xl" />
                  {/* Frame decoration */}
                  <div className="absolute inset-0 rounded-2xl border border-[#00d4ff]/20" />
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#00d4ff]" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#00d4ff]" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#00d4ff]" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#00d4ff]" />
                </div>
              </div>

              {/* Floating status card */}
              <div className="absolute -bottom-6 -right-6 glass neon-border rounded-xl p-4 min-w-40">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400 font-mono">En formation</span>
                </div>
                <div className="text-white font-semibold text-sm">ISI Dakar</div>
                <div className="text-white/40 text-xs">Licence Cybersécurité</div>
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-white mb-4">
              Abdoulaye Serge Diallo
            </h3>
            <p className="text-white/60 leading-relaxed mb-8 text-base">
              Passionné par les technologies et la résolution de problématiques complexes,
              je développe activement mes compétences en informatique, cybersécurité et ingénierie
              à travers des projets concrets et une veille constante. Doté d'un esprit analytique,
              d'une grande curiosité et d'une forte capacité d'adaptation, je souhaite intégrer un
              environnement exigeant où la performance, la précision et l'innovation sont essentielles.
            </p>

            <div className="space-y-3 mb-8">
              {infos.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-3 rounded-xl glass-card group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00d4ff]/20 transition-colors">
                    <Icon className="w-4 h-4 text-[#00d4ff]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 font-mono">{label}</div>
                    <div className="text-white/80 text-sm font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div>
              <h4 className="text-xs font-mono text-white/40 tracking-widest uppercase mb-3">Langues</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { lang: 'Français', level: 'Courant', color: 'from-[#00d4ff] to-[#0066cc]' },
                  { lang: 'Anglais', level: 'Notions', color: 'from-[#0066cc] to-[#003a7a]' },
                  { lang: 'Allemand', level: 'A1 en cours', color: 'from-[#003a7a] to-[#001329]' },
                ].map(({ lang, level, color }) => (
                  <div key={lang} className={`px-4 py-2 rounded-lg bg-gradient-to-r ${color} border border-[#00d4ff]/20`}>
                    <div className="text-white font-semibold text-sm">{lang}</div>
                    <div className="text-white/60 text-xs">{level}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />
    </div>
  );
}
