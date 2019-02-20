<template>
  <footer class="footer">
    <div class="container">
      <div class="row footer-top">
        <div class="col-sm-5 col-lg-5">
          <p class="padding-top-xsm">{{ description }}</p>

          <div class="text-md">
            <a v-for="item in contacts" v-title="item.title" :href="item.link" :style="contactStyle" target="_blank">
              <i :class="`fa fa-${item.icon}`"></i>
            </a>
          </div>

          <br>

          <span v-html="designer"></span>
        </div>

        <div class="col-sm-6 col-lg-6 col-lg-offset-1">
          <div class="row">
            <!-- 官方微信 -->
            <div class="col-sm-4">
              <h4>{{ sponsor.title }}</h4>
              <a :href="sponsor.list.link" target="_blank">
                <img :src="sponsor.list.logo" :alt="sponsor.list.title" class="footer-sponsor-link" width="98">
              </a>
            </div>

            <div class="col-sm-4">
              <h4>{{ statistics.title }}</h4>

              <ul class="list-unstyled">
                <li v-for="item in statistics.list">{{ item.title }}: {{ item.description }}</li>
              </ul>
            </div>

            <div class="col-sm-4">
              <h4>{{ other.title }}</h4>

              <ul class="list-unstyled">
                <li v-for="item in other.list">
                  <a :href="item.link" :title="item.title" target="_blank">
                    <i :class="`fa fa-${item.icon}`"></i> {{ item.title }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import title from '@/directives/title'
export default {
  name: 'TheFooter',
  directives: {
        title
    },
  data() {
    return {
      description: '智能拐杖是一个为老人服务的机构',
      contacts: [
        {
          icon: 'envelope',
          title: '反馈问题',
          link: 'mailto:zngz@163.com'
        },
        {
          icon: 'weibo',
          title: '机构微博',
          link: 'https://weibo.com/'
        },
        {
          icon: 'weixin',
          title: '加我微信',
          link: '#'
        }
      ],
      contactStyle: {
        paddingRight: '8px'     
      },
      designer: `
        <span style="font-size:0.9em">Designed by
          <span style="color: #e27575;font-size: 14px;">★</span>
          <a href="https://github.com/wangyicong"target="_blank"style="color:inherit">WangYiCong</a>
        </span>
      `,
      sponsor: {
        title: '官方微信',
        list: {
            logo: 'https://wx1.sinaimg.cn/mw690/007d7DTvgy1g0c7dbfu63j30gb0gd0wv.jpg',
            title: '官方微信',
            link: '#'
        }
      },
      statistics: {
        title: '统计信息',
        list: [
          {
            title: '网站会员',
            description: '22889'
          },
          {
            title: '话题数',
            description: '7397'
          },
          {
            title: '评论数',
            description: '39375'
          }
        ]
      },
      other: {
        title: '关于我们',
        list: [
          {
            icon: 'thumbs-up',
            title: '机构服务',
            link: '#'
          },
          {
            icon: 'globe',
            title: '合作商',
            link: '#'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
a:hover, a:focus { color: #e27575; transition: color .15s;}
.padding-top-xsm{
  font-size: 20px;
}
</style>