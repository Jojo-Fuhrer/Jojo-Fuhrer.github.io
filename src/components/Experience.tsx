import { useEffect, useRef, useState } from 'react';
import { Briefcase, Shield, Wrench, Bird } from 'lucide-react';

const experiences = [
  {
    icon: Shield,
    title: 'Participant – Cyber War Game 2026',
    org: 'Base aérienne 160 Colonel Frédéric Geille (Ker AYO), Ouakam, Dakar-Sénégal',
    period: 'Mars 2026',
    color: '#00d4ff',
    tag: 'CTF Competition',
    points: [
      'Participation à une compétition de cybersécurité (type CTF) en collaboration avec le COJOJ',
      'Résolution de défis en sécurité informatique (analyse, logique, exploitation)',
      'Travail en environnement compétitif et sous contrainte de temps',
      'Renforcement des compétences en analyse et en résolution de problèmes',
      'Types de défis : réseau, web, crypto et plus',
    ],
  },
  {
    icon: Wrench,
    title: 'Mise en place de structures métalliques',
    org: 'DECP : Avenue Bourguiba face SENELEC de Castors, Dakar - Sénégal',
    period: 'Août 2024',
    color: '#0066cc',
    tag: 'Travail Technique',
    points: [
      'Contribution à l\'installation de structures métalliques dans un environnement institutionnel',
      'Travail en équipe sur des tâches techniques et logistiques',
      'Respect des consignes de sécurité et des délais',
      'Développement de rigueur, discipline et capacité d\'adaptation',
    ],
  },
  {
    icon: Bird,
    title: 'Gestion d\'une activité d\'élevage avicole',
    org: 'Kafountine, Ziguinchor - Sénégal',
    period: '2024 – 2025',
    color: '#00ffea',
    tag: 'Entrepreneuriat',
    points: [
      'Organisation et suivi quotidien de l\'élevage (cailles, poulets, canards)',
      'Gestion de l\'alimentation et du bien-être des animaux',
      'Développement de l\'autonomie, du sens des responsabilités et de la rigueur',
    ],
  },
  {
    icon: Briefcase,
    title: 'Programme de formation – Peace Corps (États-Unis)',
    org: 'Vélingara, Kolda - Sénégal',
    period: 'Avril 2017',
    color: '#f5d67a',
    tag: 'Leadership',
    points: [
      'Sélectionné parmi les meilleurs élèves du département',
      'Formation en écologie et sensibilisation au développement durable',
      'Initiation à l\'entrepreneuriat et à la gestion de projets',
      'Développement de l\'esprit d\'initiative et de la responsabilité',
    ],
  },
];

export default function Experience() {
  const [visible, setVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative py-28 overflow-hidden grid-bg">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />
      <div className="absolute left-0 top-1/4 w-80 h-80 rounded-full bg-[#0066cc]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#00d4ff]/20 mb-4">
            <Briefcase className="w-4 h-4 text-[#00d4ff]" />
            <span className="text-sm font-mono text-[#00d4ff] tracking-wider">EXPÉRIENCES</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Parcours <span className="text-gradient">Professionnel</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff]/50 via-[#0066cc]/30 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              const isEven = i % 2 === 0;

              return (
                <div
                  key={exp.title}
                  className={`relative flex items-start gap-6 md:gap-0 transition-all duration-700 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-8 md:left-1/2 top-6 w-4 h-4 rounded-full transform -translate-x-1/2 border-2 z-10 shadow-[0_0_12px_currentColor]"
                    style={{
                      borderColor: exp.color,
                      backgroundColor: activeCard === i ? exp.color : '#020818',
                      color: exp.color,
                    }}
                  />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 flex-1 ${isEven ? 'md:pr-12' : 'md:pl-12'} md:max-w-[calc(50%-2rem)]`}>
                    <div
                      className="glass-card rounded-2xl p-6 cursor-pointer"
                      onClick={() => setActiveCard(activeCard === i ? null : i)}
                    >
                      {/* Header */}
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${exp.color}15`, border: `1px solid ${exp.color}30` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: exp.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span
                              className="text-xs font-mono px-2 py-0.5 rounded-full"
                              style={{
                                color: exp.color,
                                backgroundColor: `${exp.color}15`,
                                border: `1px solid ${exp.color}30`,
                              }}
                            >
                              {exp.tag}
                            </span>
                            <span className="text-xs text-white/40 font-mono">{exp.period}</span>
                          </div>
                          <h3 className="text-white font-semibold text-sm leading-tight">{exp.title}</h3>
                        </div>
                      </div>

                      <p className="text-white/40 text-xs mb-3" style={{ color: `${exp.color}80` }}>
                        {exp.org}
                      </p>

                      {/* Expandable points */}
                      <div className={`overflow-hidden transition-all duration-500 ${activeCard === i ? 'max-h-96' : 'max-h-0'}`}>
                        <ul className="space-y-2 pt-2 border-t border-white/5">
                          {exp.points.map((point, pi) => (
                            <li key={pi} className="flex items-start gap-2 text-white/60 text-sm">
                              <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: exp.color }} />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        className="mt-2 text-xs font-mono transition-colors"
                        style={{ color: `${exp.color}80` }}
                      >
                        {activeCard === i ? '▲ Réduire' : '▼ Voir les détails'}
                      </button>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />
    </div>
  );
}
