import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors:{
				main:"#FFF0D1",
				section1:"#795757",
				section2:"#664343",
				accent:"#3B3030"
			}
		}
	},

	plugins: [typography, forms]
} satisfies Config;
