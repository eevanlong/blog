import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  darkMode: 'class',
  theme: {},
  extract: {
    include: ['**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  shortcuts: {
    ipt: '!outline-none box-border text-size-0.5rem bg-gray-200 text-gray-500 rounded pl-7 pr-3 py-2 font-semibold antialiased caret-dark-300',
  },
  variants: {
    scrollbar: ['dark'],
  },
  plugins: [require('@windicss/plugin-scrollbar')],
});
