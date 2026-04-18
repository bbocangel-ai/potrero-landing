/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Paleta Tierra Boliviana — compartida con la app Potrero
      colors: {
        potrero: {
          50:  '#F0F5F1',
          100: '#D6E4D9',
          200: '#A8C5B0',
          300: '#7BA588',
          400: '#4E7D5A',  // Verde Claro
          500: '#3D6B48',  // Verde Campo
          600: '#2A5438',  // Verde Medio
          700: '#1E4230',  // Verde Profundo — PRIMARIO
          800: '#162F23',
          900: '#0C1A10',  // Negro Campo
        },
        earth: {
          50:  '#FAF6EE',
          100: '#F4EFE3',  // Off-White — fondo
          200: '#E8DCC4',  // Crema — superficies
          300: '#DFC08A',  // Dorado Claro
          400: '#C8A971',  // Dorado Paja — ACENTO
          500: '#A88A55',
          600: '#866C40',
          700: '#64502E',
          800: '#42351E',
          900: '#211B0F',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 1px 2px rgba(30, 66, 48, 0.06), 0 1px 2px rgba(30, 66, 48, 0.04)',
        'warm':    '0 4px 12px rgba(30, 66, 48, 0.08), 0 2px 4px rgba(30, 66, 48, 0.04)',
        'warm-lg': '0 12px 32px rgba(30, 66, 48, 0.12), 0 4px 8px rgba(30, 66, 48, 0.06)',
        'warm-xl': '0 24px 48px rgba(30, 66, 48, 0.16), 0 8px 16px rgba(30, 66, 48, 0.08)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
