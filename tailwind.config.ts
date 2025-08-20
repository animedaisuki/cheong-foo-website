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
          primary: '#1E3A8A',
          secondary: '#3B82F6',
          dark: '#1E2B5A',
          light: '#3B82F6',
          accent: '#FB923C',
          green: '#166534',
          lime: '#365314',
        },
      },
      fontFamily: {
        'mtr-song': ["FAKE-MTRSong_80's_Special_V4", 'serif'],
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
}
export default config