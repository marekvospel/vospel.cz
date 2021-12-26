import preprocess from 'svelte-preprocess'
import nodeAdapter from '@sveltejs/adapter-node'
import * as Path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: nodeAdapter(),
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    prerender: {
      onError: ({ status, path, referrer, referenceType }) =>
        console.warn(
          `${status} ${path}${
            referrer ? ` (${referenceType} from ${referrer})` : ''
          }`,
        ),
    },
    vite: {
      resolve: {
        alias: {
          $utils: Path.parse('src/utils').base,
        },
      },
    },
  },
}

export default config
