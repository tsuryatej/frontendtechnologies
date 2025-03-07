
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5330, hash: '9a78f57e2d7e708eb4cf6c98ec30d36de6d1a3bc71728d2cbfe023c10e266274', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1058, hash: '29a15fcdd7ba468c4aa60a91ffd575b8f02368ca6d895e93ed3723116a29827d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-TCGJFIP4.css': {size: 262693, hash: 'sXPQ3K0bKxg', text: () => import('./assets-chunks/styles-TCGJFIP4_css.mjs').then(m => m.default)}
  },
};
