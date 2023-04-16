import React, { lazy } from 'react'
// import { Navigate } from 'react-router-dom'

// 路由组件
import Login from '@/pages/login/login'
import Home from '@/pages/home/home'

// 懒加载组件
const Loss = lazy(() => import(/* @vite-ignore */ '@/pages/404/404'))
const User = lazy(() => import('@/pages/user/user'))

// Loading组件 全局
const Loading = () => <div className="loading"></div>

// 懒加载
const LazyRouter = (element: JSX.Element) => (
  <React.Suspense fallback={<Loading />}>{element}</React.Suspense>
)

// 可能会需要重定向路由 => <Navigate to="/app" />
const routers = [
  {
    path: '/',
    name: 'app',
    element: <Home />,
    meta: {
      title: '首页',
      requireAuth: false
    }
  },
  {
    path: '/user/:id?',
    name: 'user',
    element: LazyRouter(<User />),
    meta: {
      title: '个人中心',
      requireAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    element: <Login />,
    meta: {
      title: '登录',
      requireAuth: false
    }
  },
  {
    path: '/*',
    name: '404',
    element: LazyRouter(<Loss />),
    meta: {
      title: '404',
      requireAuth: false
    }
  }
]

export default routers
