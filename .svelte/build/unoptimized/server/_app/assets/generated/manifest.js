import * as layout from "../../routes/$layout.svelte.js";

const components = [
	() => import("../../routes/index.svelte.js")
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