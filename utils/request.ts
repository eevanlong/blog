import type {
  AfterFetchContext,
  BeforeFetchContext,
  CreateFetchOptions,
  OnFetchErrorContext,
} from '@vueuse/core'

import { createFetch } from '@vueuse/core'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwic3ViIjoxLCJpYXQiOjE2NDc2MTQ0NDUsImV4cCI6MTY0ODIxOTI0NX0.0WMvBdoU_cKYtPZWDuFpz7JrNbv0-iDR_BCfcQY241s'

// 请求拦截
const beforeFetch = async ({ options, cancel }: BeforeFetchContext) => {
  // const myToken = localStorage.getItem('token')

  // if (!myToken)
  //   cancel()

  options.headers = {
    ...options.headers,
    // Authorization: `Bearer ${token}`,
  }

  return { options }
}

// 响应拦截
const afterFetch = (ctx: AfterFetchContext) => ctx

// 响应错误拦截
const onFetchError = (ctx: OnFetchErrorContext) => {
  if (ctx.data === null)
    ctx.data = { message: 'No data' }

  ctx.error = new Error('Custom Error')
  return ctx
}

export default createFetch({
  // baseUrl: 'https://api.123mtr.top',
  immediate: false,
  timeout: 5000, // 过期时间
  options: {
    beforeFetch,
    afterFetch,
    onFetchError,
  },
  fetchOptions: {
    mode: 'no-cors', // "cors" | "navigate" | "no-cors" | "same-origin";
    credentials: 'include', // 请求时携带 cookie 值
  },
} as CreateFetchOptions)
