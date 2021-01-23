import * as renderer from '@sveltejs/kit/dist/renderer';
import root from './_app/assets/generated/root.svelte.js';
import { set_paths } from './_app/assets/runtime/internal/singletons.js';
import * as setup from './_app/setup/index.js';

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.ico\" />\n\t\t<link href=\"/tailwind.css\" rel=\"stylesheet\">\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

const entry = "entry-a227f0b6.js";

set_paths({"base":"","assets":"/."});

// allow paths to be overridden in svelte-kit start
export function init({ paths }) {
	set_paths(paths);
}

init({ paths: {"base":"","assets":"/."} });

const d = decodeURIComponent;
const empty = () => ({});

const components = [
	() => import("./_app/routes/index.svelte.js")
];



const manifest = {
	assets: [{"file":"favicon.ico","size":25135,"type":"image/vnd.microsoft.icon"},{"file":"robots.txt","size":67,"type":"text/plain"},{"file":"tailwind.css","size":1827356,"type":"text/css"}],
	layout: () => import("./_app/routes/$layout.svelte.js"),
	error: () => import("./_app/assets/components/error.svelte.js"),
	pages: [
		{
					pattern: /^\/$/,
					params: empty,
					parts: [components[0]],
					css: ["/_app/start-1646ff03.css", "/_app/index.svelte-01fed7ad.css"],
					js: ["/_app/index.svelte-a516ebbf.js", "/_app/start-282aa4a0.js", "/_app/inject_styles-cd877ae9.js"]
				}
	],
	endpoints: [
		
	]
};

export function render(request, {
	paths = {"base":"","assets":"/."},
	only_prerender = false,
	get_static_file
} = {}) {
	return renderer.render(request, {
		paths,
		template,
		manifest,
		target: "#svelte",
		entry,
		root,
		setup,
		dev: false,
		amp: false,
		only_prerender,
		app_dir: "_app",
		host: null,
		host_header: null,
		get_stack: error => error.stack,
		get_static_file,
		get_amp_css: dep => css_lookup[dep]
	});
}