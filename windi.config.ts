import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  darkMode: 'class',
  theme: {},
  extract: {
    include: ['**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  variants: {
    scrollbar: ['dark'],
  },
  plugins: [require('@windicss/plugin-scrollbar')],
});
