import type {
  AfterFetchContext,
  BeforeFetchContext,
  CreateFetchOptions,
  OnFetchErrorContext,
} from '@vueuse/core'

import { createFetch } from '@vueuse/core'

// 请求拦截
const beforeFetch = async ({ options, cancel }: BeforeFetchContext) => {
  const myToken = localStorage.getItem('TOKEN')

  if (!myToken)
    cancel()

  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${myToken}`,
  }

  return { options }
}

// 响应拦截
const afterFetch = (ctx: AfterFetchContext) => ctx

// 响应错误拦截
const onFetchError = (ctx: OnFetchErrorContext) => {
  if (ctx.data === null)
    ctx.data = { title: 'Hunter x Hunter' }

  ctx.error = new Error('Custom Error')
  return ctx
}

export default (options: RequestInit) => createFetch({
  baseUrl: import.meta.env.API_URL as string,
  options: {
    beforeFetch,
    afterFetch,
    onFetchError,
  },
  fetchOptions: {
    ...options,
    mode: 'cors',
  },
} as CreateFetchOptions)
