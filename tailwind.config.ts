import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors:{
				main:"#1E201E",
				section1:"#3C3D37",
				section2:"#697565",
				accent:"#ECDFCC"
			}
		}
	},

	plugins: [typography, forms]
} satisfies Config;
