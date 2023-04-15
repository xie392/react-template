# react+ts+redux+router+semi-ui 模板 ——— 开箱即用

每次创建新项目是都需要一堆配置，而且有些配置繁琐花费时间，为了不重复造轮子，我建了一个项目模板，为了方便构建工程。现在介绍一下这个工程:

# 项目基本配置

- 已在项目中配置好了 `eslint`、`prettier`
- 已在项目中配置好了 `typescript`
- 已经做了数据持久化，可以根据自己需求去保存
```js
// path: src/store/index
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
  blacklist: ['']  //设置某个reducer数据不持久化，
}
```
- 已在项目中做了路由守卫，可以根据自己需要，在 `router/index` 下的 `routers` 中的 `meta` 配置 `requireAuth` 就好，本工程用的是 v6 版本

```js
const routers = [
  {
    path: '/',
    name: 'home',
    element: <Home />,
    meta: {
      // 标题
      title: '首页',
      // 是否需要鉴权
      requireAuth: false
    }
  }
]
```

# 项目结构

```shell
├── public                  # 静态资源
├── src                     # 源码
│   ├── api                 # 接口
│   ├── assets              # 静态资源
│   ├── components          # 公共组件
│   ├── hooks               # 公共hooks
│   ├── pages               # 页面
│   ├── router              # 路由
│   ├── store               # 状态管理
│   ├── types               # 类型定义
│   ├── utils               # 工具函数
│   ├── App.tsx             # 入口组件
│   ├── main.tsx            # 入口文件
│   ├── permission.tsx      # 权限控制
├── .env.development        # 开发环境变量
├── .env.production         # 生产环境变量
├── .eslintrc.cjs           # eslint配置
├── .gitignore              # git忽略文件
├── .prettierrc             # prettier配置
├── index.html              # html模板
├── package.json            # 依赖
├── README.md               # 说明文档
├── tsconfig.json           # ts配置
├── tsconfig.node.json      # ts配置
├── vite.config.ts          # vite配置
```

# 安装教程

```shell
git clone https://gitee/xie392/react-template.git
```

# 使用说明

```shell
npm install
npm run dev
```

或

```shell
yarn install
yarn dev
```
