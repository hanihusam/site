// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	site: 'https://www.bapak2.dev',
	prefetch: true,

	// Enable React to support React JSX components.
	integrations: [react()],

	vite: {
		plugins: [tailwindcss()],
	},
})
