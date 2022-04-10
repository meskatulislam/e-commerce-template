module.exports = {
	content: ["./src/**/*.{html,js}", "./*{html, js}"],
	theme: {
		// screens: {
		// 	sm: "640px",
		// 	md: "768px",
		// 	lg: "1024px",
		// 	xl: "1280px",
		// 	"2xl": "1536px",
		// },
		// container: {
		// 	center: true,
		// 	padding: "4rem",
		// },
		extend: {
			container: {
				padding: {
				  '2xl': '9rem',
				},
			  },
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
