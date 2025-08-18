import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1E3A8A', // blue-800
          secondary: '#3B82F6', // blue-500
          dark: '#1E2B5A', // blue-950
          light: '#3B82F6', // blue-500
          accent: '#FB923C', // orange-400
          green: '#166534', // green-700
          lime: '#365314', // lime-800
        },
      },
      fontFamily: {
        'mtr-song': ['FAKE-MTRSong_80\'s_Special_V4', 'serif'],
        'metropolis': ['Metropolis', 'sans-serif'],
        'pingfang': ['PingFang_HK', 'sans-serif'],
        'arial-rounded': ['Arial_Rounded_MT_Bold', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
export default config
