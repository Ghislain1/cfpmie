import type { Config } from '@react-router/dev/config'

export default {
  // return a list of URLS to prerender at build time
  async prerender() {
    return ["/", "about"]
  },
  ssr: false,
  appDirectory: 'src',
  buildDirectory: 'build',
} satisfies Config
