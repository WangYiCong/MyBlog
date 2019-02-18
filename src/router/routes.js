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
    //编辑个人资料
    {
      path: '/users/edit',
      name: 'EditUsers',
      component: () => import('@/views/users/Edit.vue')
    },
    // 编辑资料路由
    {
      path: '/users/1/edit',
      component: () => import('@/views/users/Edit.vue'),
      children: [
        {
          path: '',
          name: 'EditProfile',
          component: () => import('@/views/users/Profile.vue'),
          // auth 为 true，标识当前路由需要登录才能访问
          meta: { auth: true }
        },//修改图像
        {
          path: '/users/1/edit_avatar',
          name: 'EditAvatar',
          component: () => import('@/views/users/Avatar.vue'),
          meta: { auth: true }
        },//修改密码
        {
          path: '/users/1/edit_password',
          name: 'EditPassword',
          component: () => import('@/views/users/Password.vue'),
          meta: { auth: true }
        }
      ]
    },


  ]