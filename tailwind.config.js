/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.rs"
	],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [
		require('tw-elements/dist/plugin')
	],
}
