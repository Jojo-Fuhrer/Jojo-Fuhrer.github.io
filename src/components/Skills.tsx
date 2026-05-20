import { useEffect, useRef, useState } from 'react';
import { Zap, Brain, Users, Target, Eye, Lightbulb, RefreshCw, GitBranch } from 'lucide-react';

const skillCategories = [
  {
    title: 'Compétences Techniques',
    color: '#00d4ff',
    skills: [
      { name: 'Cybersécurité', level: 75, icon: '🔐' },
      { name: 'CTF / Pentesting', level: 65, icon: '⚔️' },
      { name: 'Analyse Réseau', level: 60, icon: '🌐' },
      { name: 'Cryptographie', level: 55, icon: '🔑' },
      { name: 'Linux / Terminal', level: 70, icon: '🐧' },
      { name: 'Informatique générale', level: 80, icon: '💻' },
    ],
  },
  {
    title: 'Compétences Transversales',
    color: '#00ffea',
    skills: [
      { name: 'Analyse & Résolution', level: 85, icon: '🧠' },
      { name: 'Esprit critique', level: 80, icon: '🔍' },
      { name: 'Adaptabilité', level: 90, icon: '♻️' },
      { name: 'Travail d\'équipe', level: 85, icon: '🤝' },
      { name: 'Autonomie', level: 88, icon: '🎯' },
      { name: 'Curiosité', level: 95, icon: '💡' },
    ],
  },
];

const softSkills = [
  { icon: Brain, label: 'Analyse', desc: 'Pensée analytique avancée' },
  { icon: Target, label: 'Précision', desc: 'Attention aux détails' },
  { icon: Users, label: 'Équipe', desc: 'Collaboration efficace' },
  { icon: RefreshCw, label: 'Adaptabilité', desc: 'Flexible face aux défis' },
  { icon: Eye, label: 'Esprit critique', desc: 'Vision objective' },
  { icon: Lightbulb, label: 'Curiosité', desc: 'Apprentissage continu' },
  { icon: GitBranch, label: 'Résolution', desc: 'Problem solver' },
  { icon: Zap, label: 'Autonomie', desc: 'Initiative personnelle' },
];

interface SkillBarProps {
  name: string;
  level: number;
  icon: string;
  color: string;
  delay: number;
  animate: boolean;
}

function SkillBar({ name, level, icon, color, delay, animate }: SkillBarProps) {
  return (
    <div className="mb-4" style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-white/80 text-sm font-medium">{name}</span>
        </div>
        <span className="text-sm font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full skill-bar transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}80, ${color})`,
            boxShadow: animate ? `0 0 8px ${color}60` : 'none',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [visible, setVisible] = useState(false);
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
    <div ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />

      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#00d4ff]/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#00d4ff]/20 mb-4">
            <Zap className="w-4 h-4 text-[#00d4ff]" />
            <span className="text-sm font-mono text-[#00d4ff] tracking-wider">COMPÉTENCES</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Arsenal <span className="text-gradient">Technique</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">
            Un ensemble de compétences techniques et transversales développées à travers la formation et la pratique.
          </p>
        </div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((cat, ci) => (
            <div
              key={cat.title}
              className={`glass-card rounded-2xl p-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${ci * 150}ms` }}
            >
              <h3 className="text-sm font-mono tracking-wider mb-6" style={{ color: cat.color }}>
                {cat.title.toUpperCase()}
              </h3>
              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  color={cat.color}
                  delay={si * 100}
                  animate={visible}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Soft skills grid */}
        <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-center text-sm font-mono text-white/40 tracking-widest uppercase mb-8">
            Qualités Personnelles
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {softSkills.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={label}
                className={`glass-card rounded-xl p-4 text-center transition-all duration-500 group`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#00d4ff]/20 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all">
                  <Icon className="w-5 h-5 text-[#00d4ff]" />
                </div>
                <div className="text-white font-semibold text-sm mb-1">{label}</div>
                <div className="text-white/40 text-xs">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />
    </div>
  );
}
