import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "/Users/kaungkhantsithu/Documents/GitHub/abac-drift-front-end/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}