import { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const navItems = [
  { id: 'hero', label: 'Accueil' },
  { id: 'about', label: 'Profil' },
  { id: 'skills', label: 'Compétences' },
  { id: 'experience', label: 'Expérience' },
  { id: 'education', label: 'Formation' },
  { id: 'interests', label: 'Intérêts' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#020818]/90 backdrop-blur-xl border-b border-[#00d4ff]/20 shadow-[0_4px_30px_rgba(0,212,255,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#0066cc] flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.4)] group-hover:shadow-[0_0_30px_rgba(0,212,255,0.7)] transition-all">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="font-mono text-sm font-600 text-[#00d4ff] tracking-widest uppercase hidden sm:block">
            ASD<span className="text-white/40">.cyber</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                  activeSection === item.id
                    ? 'text-[#00d4ff] bg-[#00d4ff]/10'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#00d4ff] rounded-full shadow-[0_0_8px_#00d4ff]" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="mailto:sergesuusa@gmail.com"
          className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#0066cc] text-white text-sm font-semibold hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all duration-300 hover:scale-105"
        >
          Me contacter
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-white/70 hover:text-[#00d4ff] transition-colors"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden glass border-t border-[#00d4ff]/10 px-6 py-4">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? 'text-[#00d4ff] bg-[#00d4ff]/10'
                      : 'text-white/60'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
