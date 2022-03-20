import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      'sm': { min: '640px', max: '767px' },
    },
  },
  extract: {
    include: ['**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  variants: {
    scrollbar: ['dark']
  },
  plugins: [
    require('@windicss/plugin-scrollbar'),
  ]
})
