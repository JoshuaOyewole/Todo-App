/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xsm': '375px',
      'sm': '640px',
      'md': '769px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'blue': '#1A73CE',
      'bg': '#BECBB9',
      'blue-300': '#93c5fd',
      'blue-500': '#3b82f6',
      'blue-700': '#1d4ed8',
      'blue-800': '#1e40af',
      'pink': '#ff49db',
      'black': '#000',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray': '#7b7981',
      'gray-dark': '#273444',
      'gray-50': '#f9fafb',
      'gray-200': '#f3f4f6',
      'gray-100': '#e5e7eb',
      'gray-300': '#d1d5db',
      'gray-350': '#fafafa',
      'gray-500': '#6b7280',
      'gray-600': '#4b5563',
      'gray-800': '#1f2937',
      'gray-900': '#111827',
      'gray-light': '#F4F4F4',
      'white': '#fff',
    },
    fontFamily: {
      sans: ['Barlow', 'Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      flexBasis: {
        '30': '30%',
        '40': '40%',
        '35': '35%',
        '65': '65%',
        '55': '55%',
        '70': '70%',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
}

/* 
.question {
  padding: 1rem 1.5rem;
  border: 2px solid var(--clr-grey-special);
  margin-bottom: 1rem;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
}
.question h4 {
  text-transform: none;
  line-height: 1.5;
}
.question p {
  color: var(--clr-grey-3);
  margin-bottom: 0;
  margin-top: 0.5rem;
}
.question header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.question header h4 {
  margin-bottom: 0;
}
.btn {
  background: transparent;
  border-color: transparent;
  width: 2rem;
  height: 2rem;
  background: var(--clr-grey-special);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--clr-red-special);
  cursor: pointer;
  margin-left: 1rem;
  align-self: center;
  min-width: 2rem;
}
*/