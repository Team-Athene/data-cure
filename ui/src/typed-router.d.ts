/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

/// <reference types="unplugin-vue-router/client" />

import type {
  // type safe route locations
  RouteLocationTypedList,
  RouteLocationResolvedTypedList,
  RouteLocationNormalizedTypedList,
  RouteLocationNormalizedLoadedTypedList,
  RouteLocationAsString,
  RouteLocationAsRelativeTypedList,
  RouteLocationAsPathTypedList,

  // helper types
  // route definitions
  RouteRecordInfo,
  ParamValue,
  ParamValueOneOrMore,
  ParamValueZeroOrMore,
  ParamValueZeroOrOne,

  // vue-router extensions
  _RouterTyped,
  RouterLinkTyped,
  RouterLinkPropsTyped,
  NavigationGuard,
  UseLinkFnTyped,

  // data fetching
  _DataLoader,
  _DefineLoaderOptions,
} from 'unplugin-vue-router/types'

declare module 'vue-router/auto/routes' {
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/health-organization/': RouteRecordInfo<'/health-organization/', '/health-organization', Record<never, never>, Record<never, never>>,
    '/health-organization/access-requests': RouteRecordInfo<'/health-organization/access-requests', '/health-organization/access-requests', Record<never, never>, Record<never, never>>,
    '/health-organization/accessed-file': RouteRecordInfo<'/health-organization/accessed-file', '/health-organization/accessed-file', Record<never, never>, Record<never, never>>,
    '/health-organization/data-hub': RouteRecordInfo<'/health-organization/data-hub', '/health-organization/data-hub', Record<never, never>, Record<never, never>>,
    '/health-organization/manage-doctors': RouteRecordInfo<'/health-organization/manage-doctors', '/health-organization/manage-doctors', Record<never, never>, Record<never, never>>,
    '/health-organization/my-file': RouteRecordInfo<'/health-organization/my-file', '/health-organization/my-file', Record<never, never>, Record<never, never>>,
    '/health-organization/upload-file': RouteRecordInfo<'/health-organization/upload-file', '/health-organization/upload-file', Record<never, never>, Record<never, never>>,
    '/registration': RouteRecordInfo<'/registration', '/registration', Record<never, never>, Record<never, never>>,
    '/research-organization/': RouteRecordInfo<'/research-organization/', '/research-organization', Record<never, never>, Record<never, never>>,
    '/research-organization/access-requests': RouteRecordInfo<'/research-organization/access-requests', '/research-organization/access-requests', Record<never, never>, Record<never, never>>,
    '/research-organization/accessed-file': RouteRecordInfo<'/research-organization/accessed-file', '/research-organization/accessed-file', Record<never, never>, Record<never, never>>,
    '/research-organization/data-hub': RouteRecordInfo<'/research-organization/data-hub', '/research-organization/data-hub', Record<never, never>, Record<never, never>>,
    '/research-organization/town-hall': RouteRecordInfo<'/research-organization/town-hall', '/research-organization/town-hall', Record<never, never>, Record<never, never>>,
    '/user/': RouteRecordInfo<'/user/', '/user', Record<never, never>, Record<never, never>>,
    '/user/access-requests': RouteRecordInfo<'/user/access-requests', '/user/access-requests', Record<never, never>, Record<never, never>>,
    '/user/accessed-file': RouteRecordInfo<'/user/accessed-file', '/user/accessed-file', Record<never, never>, Record<never, never>>,
    '/user/data-hub': RouteRecordInfo<'/user/data-hub', '/user/data-hub', Record<never, never>, Record<never, never>>,
    '/user/my-file': RouteRecordInfo<'/user/my-file', '/user/my-file', Record<never, never>, Record<never, never>>,
    '/user/upload-file': RouteRecordInfo<'/user/upload-file', '/user/upload-file', Record<never, never>, Record<never, never>>,
  }
}

declare module 'vue-router/auto' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export type RouterTyped = _RouterTyped<RouteNamedMap>

  /**
   * Type safe version of `RouteLocationNormalized` (the type of `to` and `from` in navigation guards).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalized<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationNormalizedLoaded` (the return type of `useRoute()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalizedLoaded<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationResolved` (the returned route of `router.resolve()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationResolved<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationResolvedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocation` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocation<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationRaw` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationRaw<Name extends keyof RouteNamedMap = keyof RouteNamedMap> =
    | RouteLocationAsString<RouteNamedMap>
    | RouteLocationAsRelativeTypedList<RouteNamedMap>[Name]
    | RouteLocationAsPathTypedList<RouteNamedMap>[Name]

  /**
   * Generate a type safe params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParams<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['params']
  /**
   * Generate a type safe raw params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParamsRaw<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['paramsRaw']

  export function useRouter(): RouterTyped
  export function useRoute<Name extends keyof RouteNamedMap = keyof RouteNamedMap>(name?: Name): RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  export const useLink: UseLinkFnTyped<RouteNamedMap>

  export function onBeforeRouteLeave(guard: NavigationGuard<RouteNamedMap>): void
  export function onBeforeRouteUpdate(guard: NavigationGuard<RouteNamedMap>): void

  export const RouterLink: RouterLinkTyped<RouteNamedMap>
  export const RouterLinkProps: RouterLinkPropsTyped<RouteNamedMap>

  // Experimental Data Fetching

  export function defineLoader<
    P extends Promise<any>,
    Name extends keyof RouteNamedMap = keyof RouteNamedMap,
    isLazy extends boolean = false,
  >(
    name: Name,
    loader: (route: RouteLocationNormalizedLoaded<Name>) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>
  export function defineLoader<
    P extends Promise<any>,
    isLazy extends boolean = false,
  >(
    loader: (route: RouteLocationNormalizedLoaded) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>

  export {
    _definePage as definePage,
    _HasDataLoaderMeta as HasDataLoaderMeta,
    _setupDataFetchingGuard as setupDataFetchingGuard,
    _stopDataFetchingScope as stopDataFetchingScope,
  } from 'unplugin-vue-router/runtime'
}

declare module 'vue-router' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export interface TypesConfig {
    beforeRouteUpdate: NavigationGuard<RouteNamedMap>
    beforeRouteLeave: NavigationGuard<RouteNamedMap>

    $route: RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[keyof RouteNamedMap]
    $router: _RouterTyped<RouteNamedMap>

    RouterLink: RouterLinkTyped<RouteNamedMap>
  }
}
