/**
 * 解析网页 url 参数
 * @param {string} url
 * @returns {object}
 * @example
 * const url = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=react%20ho
 * ok&rsv_pq=9f8b1b1e0000b1e8&rsv_
 * t=7e1e%2B%2F%2F%2F%2F%2F%2F%2F%2F%2Fw%2B
 */
export const useParams = (url: string) => {
  const params = {}
  const search = url.split('?')[1]
  if (search) {
    const searchArr = search.split('&')
    searchArr.forEach((item) => {
      const [key, value] = item.split('=')
      params[key] = value
    })
  }
  return params
}
