import Vue from 'vue'
import Router from 'vue-router'
// 引入 ./routes.js 的默认值
import routes from './routes'

Vue.use(Router)


/*
    mode：路由模式，默认值 'hash' 使用井号（ # ）作路由，值 'history' 可利用 History API 来完成页面跳转且无须重新加载；
    routes：具体的路由配置列表，用到的配置项说明：
            path：路由的路径；
            name：路由的名称；
            component：对应的视图组件；
 */
const router = new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes
})
// 全局前置守卫
router.beforeEach((to, from, next) => {
  const app = router.app
  const store = app.$options.store
  const auth = store.state.auth

  app.$message.hide()

  if (
    (auth && to.path.indexOf('/auth/') !== -1) ||
    (!auth && to.meta.auth)
  ) {
    next('/')
  } else {
    next()
  }
})

export default router