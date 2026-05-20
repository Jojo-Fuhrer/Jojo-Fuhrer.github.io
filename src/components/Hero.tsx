import { useEffect, useRef, useState } from 'react';
import { Shield, ChevronDown, Terminal, Cpu, Lock, Wifi } from 'lucide-react';

const typedStrings = [
  'Etudiant en Cybersécurité',
  'Analyste en Sécurité Informatique',
  'CTF Player & Ethical Hacker',
  'Passionné des Nouvelles Technologies',
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const current = typedStrings[stringIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setCharIndex(0);
          setStringIndex((s) => (s + 1) % typedStrings.length);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, stringIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      {/* 3D floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00d4ff]/5 blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#0066cc]/8 blur-[100px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />

      {/* Floating cyber icons */}
      <div className="absolute top-32 right-16 opacity-20 animate-float hidden lg:block" style={{ animationDelay: '0s' }}>
        <Terminal className="w-16 h-16 text-[#00d4ff]" />
      </div>
      <div className="absolute bottom-40 left-16 opacity-20 animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
        <Lock className="w-12 h-12 text-[#00d4ff]" />
      </div>
      <div className="absolute top-1/2 right-8 opacity-15 animate-float hidden xl:block" style={{ animationDelay: '1s' }}>
        <Wifi className="w-10 h-10 text-[#00ffea]" />
      </div>
      <div className="absolute top-24 left-1/4 opacity-10 animate-float hidden xl:block" style={{ animationDelay: '3s' }}>
        <Cpu className="w-14 h-14 text-[#0066cc]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left: Text Content */}
        <div
          className={`flex-1 text-center lg:text-left transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border mb-6 text-sm font-mono text-[#00d4ff]">
            <span className="w-2 h-2 rounded-full bg-[#00ffea] animate-pulse" />
            Disponible pour opportunités
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4">
            <span className="text-white">Abdoulaye</span>
            <br />
            <span className="text-white">Serge </span>
            <span className="text-gradient">Diallo</span>
          </h1>

          <div className="h-12 mb-6 flex items-center justify-center lg:justify-start">
            <span className="text-lg sm:text-xl text-white/70 font-mono">
              {displayText}
              <span className="inline-block w-0.5 h-5 bg-[#00d4ff] ml-1 animate-pulse" />
            </span>
          </div>

          <p className="text-white/50 text-base lg:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8">
            Passionné par les technologies et la sécurité informatique. Etudiant à l'ISI Dakar,
            participant actif aux compétitions CTF et en quête de défis techniques complexes.
          </p>

          {/* Stats */}
          <div className="flex items-center gap-6 justify-center lg:justify-start mb-8">
            {[
              { value: '2026', label: 'CTF Cyber War' },
              { value: 'ISI', label: 'Licence Cyber' },
              { value: '3+', label: 'Langues' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                <div className="text-xs text-white/40 font-mono">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="mailto:sergesuusa@gmail.com"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0066cc] text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Me Contacter
            </a>
            <button
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-xl glass neon-border text-[#00d4ff] font-semibold hover:bg-[#00d4ff]/10 transition-all duration-300"
            >
              Voir Mon Parcours
            </button>
          </div>
        </div>

        {/* Right: 3D Profile Card */}
        <div
          className={`relative flex-shrink-0 transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="perspective-card">
            <div className="card-inner relative w-72 h-80 sm:w-80 sm:h-96">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00d4ff]/30 via-transparent to-[#0066cc]/30 blur-xl animate-pulse-slow" />

              {/* Card */}
              <div className="relative w-full h-full rounded-2xl glass neon-border overflow-hidden scanline">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00d4ff] rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00d4ff] rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#00d4ff] rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#00d4ff] rounded-br-lg" />

                {/* Photo */}
                <div className="w-full h-full relative">
                  <img
                    src="/Gemini_Generated_Image_qe4i6nqe4i6nqe4i.png"
                    alt="Abdoulaye Serge Diallo"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020818] via-transparent to-transparent" />
                </div>

                {/* Bottom info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="w-4 h-4 text-[#00d4ff]" />
                    <span className="text-xs font-mono text-[#00d4ff]">CYBER SECURITY</span>
                  </div>
                  <div className="text-white font-semibold text-sm">Dakar, Sénégal</div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#0066cc] text-white text-xs font-mono font-semibold shadow-[0_0_20px_rgba(0,212,255,0.4)] animate-float">
                TryHackMe
              </div>
              <div className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-lg glass neon-border text-[#00d4ff] text-xs font-mono font-semibold animate-float" style={{ animationDelay: '1.5s' }}>
                CTF Player
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-[#00d4ff] transition-colors group"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-[#00d4ff]" />
      </button>
    </div>
  );
}
