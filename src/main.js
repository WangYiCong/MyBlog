// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 如果引入的是 index.js，可以使用下面的简写，等价于 import router from './router/index.js'
//不知道为什么这里的router只能用小写的？
import router from './router'
import './directives'
import './components'
import store from './store'
// 引入插件
import VueSweetalert2 from './plugins/vue-sweetalert2'
import Message from './plugins/message'
// 使用插件
Vue.use(VueSweetalert2)
Vue.use(Message)
// 设置 false 以阻止 Vue 在启动时生成生产提示
Vue.config.productionTip = false

// eslint 配置，允许 new 一个实例后不赋值，我们没有使用 eslint，如果有，则下一行注释不可缺少

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 注入store
  store,
  components: { App },
  template: '<App/>'
})
/* 注：{ App } 是 { App: App } 的缩写，
ES6（ECMAScript 6）允许在对象中直接写变量，
此时的属性名为变量名，属性值为变量的值。*/

/*注：pug 是一款模板引擎，sass-loader 和 node-sass 
用来处理 Sass（一种 CSS 扩展语言），
--save-dev 用来标识当前模块是开发所需的模块。*/
