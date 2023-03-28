// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@pinia/nuxt", "@nuxtjs/supabase"],
	// custom tailwindcss path
	tailwindcss: {
		cssPath: "~/assets/main.css",
	},
	css: [
		'~/assets/scss/custom.scss',
	],

	// server config variable
	runtimeConfig: {
		MONGO_URI: process.env.MONGO_URI,
		API_URL: process.env.API_URL
	},
	// register nitro plugin
	nitro: {
		plugins: ["@/server/db/index.ts"],
	},
	/// transpile  afew packages
	build: {
		transpile: ["@headlessui/vue", "vue-toastification", "@headlessui/tailwindcss"],
	},

	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
});
