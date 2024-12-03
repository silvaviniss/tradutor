/** @type {import('tailwindcss').Config} */
export default {
  	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
  	],
  	theme: {
    	extend: {
			colors: {
				background: '#f1f3f4',
				secondaryBackground: '#f5f5f5',
				textColor: '#5f63668',
				subtextColor: '#6c6c6c',
			}
		},
  	},
  	plugins: [],
}