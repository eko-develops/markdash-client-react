const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				light: {
					text: colors.gray['700'],
					bg: colors.white,
				},
				dark: {
					text: colors.gray['200'],
					bg: colors.slate['900'],
				},
			},
		},
	},
	plugins: [],
};
