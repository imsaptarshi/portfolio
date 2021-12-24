module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				brand: {
					black: 'rgb(55, 53, 47)'
				}
			},
			fontFamily: {
				heading: ['Spartan'],
				body: ['Open Sans']
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
