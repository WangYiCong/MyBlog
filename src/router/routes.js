// const routes = [
//     {
//       path: '/auth/register',
//       name: 'Register',
//       // 使用下面的方法指定组件，可以实现路由懒加载，即当路由被访问时才加载对应的组件：
//       component: () => import('@/views/auth/Register')
//     },
//     // 首页路由配置
//     {
//       path: '/',
//       name: 'Home',
//       component: () => import('@/views/Home')
//     },
//     // 其他未配置的路由都跳转到首页
//     {
//       path: '*',
//       // 重定向
//       redirect: '/'
//     }
//   ]
export default [
    {
      path: '/auth/register',
      name: 'Register',
      component: () => import('@/views/auth/Register')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home')
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: () => import('@/views/auth/Login')
    },
  ]