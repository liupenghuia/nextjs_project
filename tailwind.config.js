/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      textColor: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      borderColor: {
        border: 'hsl(var(--border))',
      },
    },
  },
  plugins: [],
}
