/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      },
      colors: {
        ink: '#08111f',
        paper: '#f7f9fc',
        primary: {
          50: '#eef8ff',
          100: '#d9f0ff',
          200: '#bce5ff',
          300: '#8ed4ff',
          400: '#59b8ff',
          500: '#2f95ff',
          600: '#1976f3',
          700: '#125ed6',
          800: '#154ead',
          900: '#174485'
        },
        accent: {
          cyan: '#16d9e3',
          violet: '#8b5cf6',
          emerald: '#22c55e',
          amber: '#f59e0b'
        }
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.12)',
        glow: '0 0 50px rgba(47, 149, 255, 0.28)'
      },
      backgroundImage: {
        'premium-grid': 'linear-gradient(rgba(148, 163, 184, .12) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, .12) 1px, transparent 1px)',
        'radial-blue': 'radial-gradient(circle at top left, rgba(47,149,255,.28), transparent 36rem), radial-gradient(circle at bottom right, rgba(139,92,246,.18), transparent 32rem)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' }
        },
        shine: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shine: 'shine 2.6s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
