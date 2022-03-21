import type {
  AfterFetchContext,
  BeforeFetchContext,
  CreateFetchOptions,
  OnFetchErrorContext,
} from '@vueuse/core';

import { createFetch } from '@vueuse/core';
// import { useNProgress } from '@vueuse/integrations/useNProgress';
// const { start, done } = useNProgress();

// 请求拦截
const beforeFetch = async ({ url, options, cancel }: BeforeFetchContext) => {
  // start();
  // const myToken = localStorage.getItem('token')
  // const token = '123123'

  // if (!myToken)
  //   cancel()
  //   done();

  options.headers = {
    ...options.headers,
    // Authorization: `Bearer ${token}`,
  };

  return { url, options };
};

// 响应拦截
const afterFetch = (ctx: AfterFetchContext) => {
  // done();
  return ctx;
};

// 响应错误拦截
const onFetchError = (ctx: OnFetchErrorContext) => {
  if (ctx.data === null) ctx.data = { message: 'No data' };

  ctx.error = new Error('Custom Error');
  return ctx;
};

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
    mode: 'cors', // "cors" | "navigate" | "no-cors" | "same-origin";
    // credentials: 'include', // 请求时携带 cookie 值
  },
} as CreateFetchOptions);
