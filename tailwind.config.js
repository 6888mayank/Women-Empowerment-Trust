/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#174D3A',
          deep: '#10382D',
          dark: '#0A241D',
          hover: '#133F30',
          light: '#236950',
        },
        ivory: {
          DEFAULT: '#FAF8F1',
          pure: '#FAF8F1',
          surface: '#F5F2E6',
          border: '#E8E3D2',
        },
        gold: {
          DEFAULT: '#D5A94F',
          light: '#E6C47A',
          dark: '#B88D33',
          hover: '#C2983E',
        },
        sage: {
          DEFAULT: '#E5EEE5',
          light: '#F0F6F0',
          dark: '#CBDBCB',
        },
        charcoal: {
          DEFAULT: '#252B28',
          light: '#4B5550',
          muted: '#63706A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Manrope', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(16, 56, 45, 0.04)',
        'card': '0 10px 30px -5px rgba(16, 56, 45, 0.08)',
        'card-hover': '0 20px 40px -10px rgba(16, 56, 45, 0.14)',
        'glass': '0 8px 32px 0 rgba(16, 56, 45, 0.08)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      }
    },
  },
  plugins: [],
}
