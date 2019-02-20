<template>
  <div class="navbar navbar-default topnav">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" @click="toggleNav">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <router-link to="/" class="navbar-brand">
          <span class="title">{{ logo.title }}</span>
          <img :src="logo.src" :alt="logo.title">
        </router-link>
      </div>

      <div id="top-navbar-collapse" :class="['collapse', 'navbar-collapse', { in: showCollapsedNav }]">
        <ul class="nav navbar-nav">
          <li v-for="(item, index) in navList" :class="{ active: index === activeNavIndex }">
            <a href="#" @click="changeNavIndex(index)">{{ item }}</a>
          </li>
        </ul>
        <!-- 登录注册组件 -->
        <div class="navbar-right">
          <TheEntry/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//引入注册组件

import TheEntry from '@/components/layouts/TheEntry'
export default {
  name: 'TheHeader',
  components: {
    TheEntry
  },
  // logo的数据
  data() {
    return {
      logo: {
        src: `${this.uploadsUrl}mw690/007d7DTvgy1g02d9sjo8mj305301o3yi.jpg`,
        title: '智能拐杖'
      },
      navList: ['首页', '产品介绍','项目介绍', '定位地图', '关于我们'],
      activeNavIndex: 0,
      showCollapsedNav: false
    }
  },
  beforeCreate() {
    this.uploadsUrl = 'https://wx2.sinaimg.cn/'
  },
  methods: {
    changeNavIndex(index) {
      this.activeNavIndex = index
    },
    toggleNav() {
      this.showCollapsedNav = !this.showCollapsedNav
    }
  }
}
</script>

<style scoped>
.title { display: none;}
.navbar-default .navbar-nav > .active > a { background: rgba(0,0,0,.03);}
.navbar-default{
  border-top: 0px;
}

</style>