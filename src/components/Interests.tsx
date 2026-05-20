import { useEffect, useRef, useState } from 'react';
import { Heart, Monitor, Shield, Wrench, Gamepad2, Cpu, Puzzle, TrendingUp, Globe, Activity } from 'lucide-react';

const interests = [
  {
    icon: Monitor,
    title: 'Informatique & Programmation',
    desc: 'Développement de projets, scripts et exploration des langages de programmation.',
    color: '#00d4ff',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Shield,
    title: 'Cybersécurité',
    desc: 'Veille constante sur les nouvelles menaces, CTF, et pratique des techniques de sécurité.',
    color: '#00ffea',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Wrench,
    title: 'Mécanique & Ingénierie Automobile',
    desc: 'Passion pour la mécanique, le fonctionnement des moteurs et l\'ingénierie automobile.',
    color: '#f5a623',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Gamepad2,
    title: 'Gaming & Jeux de Stratégie',
    desc: 'Passionné par les jeux de stratégie qui développent la réflexion tactique.',
    color: '#e74c3c',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Cpu,
    title: 'Nouvelles Technologies',
    desc: 'Veille tech sur l\'IA, l\'aéronautique et les avancées automobiles.',
    color: '#9b59b6',
    image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Puzzle,
    title: 'Résolution de Problèmes',
    desc: 'Pensée logique, puzzles et défis intellectuels de toute nature.',
    color: '#2ecc71',
    image: 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: TrendingUp,
    title: 'Développement Personnel',
    desc: 'Lectures, apprentissage continu et amélioration de soi au quotidien.',
    color: '#f39c12',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Globe,
    title: 'Apprentissage des Langues',
    desc: 'Maîtrise du français, bases en anglais et apprentissage de l\'allemand (A1).',
    color: '#3498db',
    image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Activity,
    title: 'Sport – Football',
    desc: 'Pratique du football, esprit d\'équipe et discipline sportive.',
    color: '#1abc9c',
    image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Interests() {
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00d4ff]/2 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#00d4ff]/20 mb-4">
            <Heart className="w-4 h-4 text-[#00d4ff]" />
            <span className="text-sm font-mono text-[#00d4ff] tracking-wider">CENTRES D'INTÉRÊT</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Passions & <span className="text-gradient">Intérêts</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto text-sm">
            Les domaines qui alimentent ma curiosité et nourrissent mon développement personnel.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {interests.map((interest, i) => {
            const Icon = interest.icon;
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={interest.title}
                className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 group ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={interest.image}
                    alt={interest.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020818] via-[#020818]/60 to-[#020818]/20" />
                  <div
                    className="absolute inset-0 opacity-30 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${interest.color}40, transparent)`,
                      opacity: isHovered ? 0.5 : 0.2,
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  className="relative -mt-12 mx-3 mb-3 rounded-xl p-4 glass"
                  style={{ borderColor: isHovered ? `${interest.color}40` : 'rgba(0,212,255,0.1)', borderWidth: '1px', borderStyle: 'solid' }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        backgroundColor: `${interest.color}20`,
                        boxShadow: isHovered ? `0 0 16px ${interest.color}40` : 'none',
                      }}
                    >
                      <Icon className="w-4 h-4" style={{ color: interest.color }} />
                    </div>
                    <h3 className="text-white font-semibold text-sm">{interest.title}</h3>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">{interest.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />
    </div>
  );
}
