module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'cloud-blue': '#40b0bd',
			},
		},
	},
	variants: {
		extend: {
			scale: ['hover', 'focus'],
			animation: ['hover', 'focus'],
		},
	},
	plugins: [],
};
