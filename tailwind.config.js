/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:        '#1AAEEE',
          'blue-dark': '#0D8DC0',
          red:         '#E63329',
          'red-dark':  '#C2271F',
        },
        sky: {
          light:   '#B3E5FC',
          mid:     '#81D4FA',
          section: '#87CEEB',
        },
        cloud: '#FFFFFF',
        ground: {
          green: '#5D9E3A',
          brown: '#8B5E3C',
        },
        neutral: {
          50:  '#F9FAFB',
          100: '#F3F4F6',
          700: '#374151',   // Body text
          900: '#111827',   // Headings (dark)
        },
      },
      fontFamily: {
        display: ['"Fredoka One"', 'cursive'],
        body:    ['"Nunito"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.08)',
        nav:  '0 2px 12px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
