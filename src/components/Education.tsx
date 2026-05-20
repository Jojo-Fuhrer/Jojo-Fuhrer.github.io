import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const education = [
  {
    icon: GraduationCap,
    title: 'Licence en Cybersécurité',
    org: 'Institut Supérieur d\'Informatique (ISI)',
    location: 'Dakar, Sénégal',
    period: 'Nov. 2025 – En cours',
    color: '#00d4ff',
    tag: 'En cours',
    desc: 'Formation intensive en sécurité informatique, réseaux, cryptographie et systèmes. Apprentissage des techniques offensives et défensives en cybersécurité.',
    highlights: ['Cryptographie', 'Sécurité Réseau', 'Ethical Hacking', 'Forensic Digital'],
  },
  {
    icon: Award,
    title: 'TryHackMe – Advent of Cyber 2025',
    org: 'Laboratoire TryHackMe',
    location: 'En ligne',
    period: 'Déc. 2026',
    color: '#00ffea',
    tag: 'Certification',
    desc: 'Participation au challenge annuel Advent of Cyber sur la plateforme TryHackMe, couvrant diverses thématiques de la cybersécurité sur 24 jours.',
    highlights: ['Web Security', 'Network Analysis', 'OSINT', 'Scripting'],
  },
  {
    icon: BookOpen,
    title: 'Baccalauréat Série S3',
    org: 'Lycée Seydina Limamou Laye',
    location: 'Dakar, Sénégal',
    period: 'Juil. 2023',
    color: '#f5d67a',
    tag: 'Diplôme',
    desc: 'Baccalauréat scientifique série S3 avec spécialisation en sciences mathématiques et physiques. Base solide pour les études d\'ingénierie.',
    highlights: ['Mathématiques', 'Physique-Chimie', 'Sciences', 'Logique'],
  },
];

export default function Education() {
  const [visible, setVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 rounded-full bg-[#00ffea]/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#00d4ff]/20 mb-4">
            <GraduationCap className="w-4 h-4 text-[#00d4ff]" />
            <span className="text-sm font-mono text-[#00d4ff] tracking-wider">FORMATION</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Diplômes & <span className="text-gradient">Certifications</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {education.map((edu, i) => {
            const Icon = edu.icon;
            return (
              <div
                key={edu.title}
                className={`relative transition-all duration-700 cursor-pointer ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
                onClick={() => setActiveCard(activeCard === i ? null : i)}
              >
                {/* Glow on active */}
                {activeCard === i && (
                  <div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-20 pointer-events-none"
                    style={{ backgroundColor: edu.color }}
                  />
                )}

                <div
                  className={`relative glass rounded-2xl p-6 h-full transition-all duration-300 ${
                    activeCard === i
                      ? 'border-opacity-60 shadow-lg'
                      : 'border-opacity-10'
                  }`}
                  style={{
                    borderColor: activeCard === i ? edu.color : 'rgba(0,212,255,0.1)',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    boxShadow: activeCard === i ? `0 0 30px ${edu.color}20` : 'none',
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-6 right-6 h-0.5 rounded-full"
                    style={{ background: `linear-gradient(90deg, transparent, ${edu.color}, transparent)` }}
                  />

                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${edu.color}15`, border: `1px solid ${edu.color}30` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: edu.color }} />
                    </div>
                    <div>
                      <span
                        className="text-xs font-mono px-2 py-0.5 rounded-full mb-2 inline-block"
                        style={{ color: edu.color, backgroundColor: `${edu.color}15` }}
                      >
                        {edu.tag}
                      </span>
                      <div className="text-xs text-white/40 font-mono">{edu.period}</div>
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-base mb-1">{edu.title}</h3>
                  <p className="font-medium text-sm mb-1" style={{ color: edu.color }}>
                    {edu.org}
                  </p>
                  <p className="text-white/40 text-xs mb-4">{edu.location}</p>

                  <p className="text-white/60 text-sm leading-relaxed mb-4">{edu.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs px-2.5 py-1 rounded-lg font-mono"
                        style={{
                          color: `${edu.color}`,
                          backgroundColor: `${edu.color}10`,
                          border: `1px solid ${edu.color}20`,
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* TryHackMe visual suggestion */}
        <div className={`mt-12 glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-14 h-14 rounded-xl bg-[#00ffea]/10 border border-[#00ffea]/20 flex items-center justify-center flex-shrink-0">
            <span className="text-2xl font-bold text-[#00ffea] font-mono">THM</span>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h4 className="text-white font-semibold mb-1">Profil TryHackMe Actif</h4>
            <p className="text-white/50 text-sm">
              Pratique régulière sur la plateforme TryHackMe — challenges de sécurité, rooms thématiques, et montée en compétences continues.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient-gold font-mono">+</div>
              <div className="text-xs text-white/40">Rooms</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#00ffea] font-mono">CTF</div>
              <div className="text-xs text-white/40">Active</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />
    </div>
  );
}
