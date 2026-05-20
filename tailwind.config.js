/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        cyber: {
          50: '#e8f4fd',
          100: '#c0e0f9',
          200: '#7ec1f3',
          300: '#3ca2ed',
          400: '#0d84e3',
          500: '#0066cc',
          600: '#004fa3',
          700: '#003a7a',
          800: '#002652',
          900: '#001329',
        },
        neon: {
          blue: '#00d4ff',
          cyan: '#00ffea',
          teal: '#0ff',
        },
        dark: {
          900: '#020818',
          800: '#040f2a',
          700: '#071640',
          600: '#0a1d55',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.8), 0 0 80px rgba(0, 212, 255, 0.4)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
