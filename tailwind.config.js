/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cornflower: {
          50: '#f0f4fe',
          100: '#dde6fc',
          200: '#c3d4fb',
          300: '#9ab7f8',
          400: '#6a91f3',
          500: '#6495ED',
          600: '#4771d9',
          700: '#3c5dc7',
          800: '#354da2',
          900: '#304380',
          950: '#212b4e',
        },
        butter: {
          50: '#fffef5',
          100: '#fffbeb',
          200: '#fff6c8',
          300: '#FFF1A8',
          400: '#ffe87a',
          500: '#ffd940',
          600: '#f5c211',
          700: '#d19a07',
          800: '#a8780a',
          900: '#8a620e',
          950: '#523603',
        },
        warmWhite: '#fefefe',
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['Nunito Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

