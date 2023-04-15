import { getCookie } from '@/utils/auth'
import { useRoutes, useLocation, useNavigate } from 'react-router-dom'
import routers from '@/router'
import { useEffect } from 'react'
import { useTitle } from '@reactuses/core'

const ToLogin = () => {
  const Navigate = useNavigate()
  useEffect(() => {
    Navigate('/login')
  })
  return <div></div>
}

const ToPages = () => {
  const Location = useLocation()
  const Navigate = useNavigate()

  useEffect(() => {
    // 如果是登录页，跳转到首页，否则跳转到当前页面
    Location.pathname === '/login' ? Navigate('/') : Navigate(Location.pathname || '/')
  })
  return <div></div>
}

/**
 * @description 全局路由守卫
 * @returns
 */
const BeforeRouter = () => {
  const RouterView = useRoutes(routers)
  const Location = useLocation()

  const { meta = {} } = RouterView?.props?.match?.route
  const token = getCookie('TOKEN')

  // 如果没有 meta，就给一个默认值
  if (!meta?.requireAuth) meta.requireAuth = false

  // @ts-ignore
  useTitle(meta?.title || 'React-TS')

  // 有token，跳转到首页
  if (Location.pathname === '/login' && token) {
    return <ToPages />
  }

  // 没有token，且需要鉴权的页面，跳转到登录页
  if (Location.pathname !== '/login' && !token && meta?.requireAuth) {
    return <ToLogin />
  }

  return RouterView
}

export default BeforeRouter
