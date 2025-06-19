/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: [
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Oxygen',
				'Ubuntu',
				'Cantarell',
				'Open Sans',
				'Helvetica Neue',
				'sans-serif'
			],
			screens: {
				print: { raw: 'print' }
			},
			fontSize: {
				'2xs': ['0.6875rem', { lineHeight: '0.875rem' }]
			}
		}
	},

	plugins: []
};

module.exports = config;
