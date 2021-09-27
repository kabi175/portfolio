module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'cloud-blue': '#40b0bd',
			},
			backgroundImage: {
				cloud: "url('static/clouds.png')",
			},
		},
	},
	variants: {
		extend: {
			display: ['group-hover'],
			scale: ['hover', 'focus'],
			animation: ['hover', 'focus'],
		},
	},
	plugins: [],
};
