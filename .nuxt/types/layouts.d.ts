import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/User/Documents/GitHub/abac-drift-front-end/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}