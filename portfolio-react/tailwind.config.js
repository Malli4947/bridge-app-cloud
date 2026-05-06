/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0f',
          elevated: '#12121a',
          card: '#161620',
          surface: '#1a1a26',
        },
        accent: {
          cyan: '#06d4d4',
          purple: '#a855f7',
          amber: '#fbbf24',
          pink: '#ec4899',
        },
        muted: '#9ca3af',
        dim: '#6b7280',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, #06d4d4 0%, #a855f7 50%, #ec4899 100%)',
        'gradient-2': 'linear-gradient(135deg, #fbbf24 0%, #ec4899 100%)',
      },
      animation: {
        spin: 'spin 4s linear infinite',
        'spin-slow': 'spin 18s linear infinite',
        float: 'float 3s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
        'scroll-wheel': 'scrollWheel 1.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          to: { transform: 'translateX(-50%)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scrollWheel: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(12px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
