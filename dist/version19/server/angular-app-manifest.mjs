
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5520, hash: '2bf424145f74a4f89c8626f2d81b40518e7fc5d73acc7dfe54f33410626f8f42', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1248, hash: '7f6afa17f551990ba6ac07058c89ceeabd4b501f8a5483404a34b00927ba13ad', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-TCGJFIP4.css': {size: 262693, hash: 'sXPQ3K0bKxg', text: () => import('./assets-chunks/styles-TCGJFIP4_css.mjs').then(m => m.default)}
  },
};
