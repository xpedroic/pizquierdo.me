/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,tsx,vue,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'bg-main': '#020617',
        'bg-main-soft': '#020617',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15,23,42,0.65)',
      },
    },
  },
  plugins: [],
};
