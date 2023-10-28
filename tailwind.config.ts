import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'logowhite': "url('/img/logo/logowhite.svg')",
        'vehiculoelectrico': "url('/img/login/vehiculoelectrico.jpg')",
        'gradientgray': " bg-gradient-to-r from-gray-700 via-gray-900 to-black"
      },
    },

  },
  plugins: [],
}
export default config
