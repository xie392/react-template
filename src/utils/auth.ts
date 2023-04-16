import Cookies from 'js-cookie'

/**
 * 获取cookie
 * @param key cookie key
 * @returns
 */
export const getCookie = (key: string): string | undefined => {
  return Cookies.get(key) || undefined
}

/**
 * 设置cookie
 * @param key       cookie key
 * @param value     cookie value
 * @param expires   cookie 过期时间
 * @returns
 */
export const setCookie = (key: string, value: string, expires: number | Date | undefined = 7) => {
  return Cookies.set(key, value, { expires })
}

/**
 * 删除指定cookie
 * @param key cookie key
 * @returns
 */
export const removeCookie = (key: string) => {
  return Cookies.remove(key)
}

/**
 * 判断是否登录
 * @returns
 */
export const isLogin = () => {
  return Cookies.get('TOKEN') ? true : false
}

/**
 * 移除所有cookie
 * @returns
 */
export const clearAllCookie = () => {
  const keys = Object.keys(Cookies.get())
  keys.forEach((key: string) => {
    Cookies.remove(key)
  })
}
