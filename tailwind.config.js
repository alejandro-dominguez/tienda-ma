/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                Lato: ['Lato', 'sans-serif'],
                Raleway: ['Raleway', 'sans-serif']
			},
			animation: {
			    slide: '9s slide infinite linear'
			},
			keyframes: {
				slide: {
					'0%': {transform: 'translateX(0)'},
					'100%': {transform: 'translateX(-100%)'}
				}
			},
        },
    },
    plugins: [],
};
