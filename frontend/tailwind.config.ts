import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: [typography],

  safelist: [
    'line',
    'line--highlighted',
    'code-highlight'
  ]
}

export default config
