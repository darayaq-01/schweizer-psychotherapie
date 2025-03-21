import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_dRII4lyR.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/anfahrt.astro.mjs');
const _page2 = () => import('./pages/datenschutz.astro.mjs');
const _page3 = () => import('./pages/impressum.astro.mjs');
const _page4 = () => import('./pages/kontakt.astro.mjs');
const _page5 = () => import('./pages/leistungen.astro.mjs');
const _page6 = () => import('./pages/newindex.astro.mjs');
const _page7 = () => import('./pages/termine.astro.mjs');
const _page8 = () => import('./pages/ueber-mich.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/404.astro", _page0],
    ["src/pages/anfahrt.astro", _page1],
    ["src/pages/datenschutz.astro", _page2],
    ["src/pages/impressum.astro", _page3],
    ["src/pages/kontakt.astro", _page4],
    ["src/pages/leistungen.astro", _page5],
    ["src/pages/newindex.astro", _page6],
    ["src/pages/termine.astro", _page7],
    ["src/pages/ueber-mich.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3188ac81-743f-4ced-9c80-19770d8417e4"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
