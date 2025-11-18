/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(220, 60, 70)',
        secondary: 'rgb(235, 140, 145)',
        neutralLight: 'rgb(250, 247, 245)',
        neutralDark: 'rgb(90, 90, 90)',
        // Paleta Premium
        gold: {
          50: '#fdfbf7',
          100: '#faf6ed',
          200: '#f4ead4',
          300: '#e8d4a5',
          400: '#d4af37',
          500: '#c5a028',
          600: '#a68523',
          700: '#8b6f1f',
          800: '#705a1a',
          900: '#594715',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdfaf5',
          200: '#faf5eb',
          300: '#f7efe0',
          400: '#f2e5d0',
          500: '#eddcc0',
          600: '#d9c8ac',
        },
        charcoal: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#2d2d2d',
          950: '#1a1a1a',
        },
      },
      fontFamily: {
        brand: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        cooper: ['Lilita One', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        cinzel: ['Cinzel', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent)',
        'gold-shimmer': 'linear-gradient(135deg, #fdfbf7 0%, #d4af37 50%, #fdfbf7 100%)',
      },
      animation: {
        'shimmer': 'shimmer 3s infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6), 0 0 60px rgba(212, 175, 55, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'gold': '0 10px 30px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 20px 60px rgba(212, 175, 55, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(255, 255, 255, 0.1)',
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'elegant': '0 10px 40px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}

