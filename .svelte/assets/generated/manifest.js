import * as layout from "/_app/routes/$layout.svelte.js";

const components = [
	() => import("/_app/routes/index.svelte.js")
];

const d = decodeURIComponent;
const empty = () => ({});

export const pages = [
	{
		// index.svelte
		pattern: /^\/$/,
		params: empty,
		parts: [components[0]]
	}
];

export const ignore = [
	
];

export { layout };