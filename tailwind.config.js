const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter"],
			},
			colors: {
				primary: {
					DEFAULT: colors.red[500],
					...colors.red,
				},
			},
		},
	},
	plugins: [require("@tailwindcss/forms"), require("@headlessui/tailwindcss")],
};
