<template>
  <button type="button" @click="getRoute">getRoute</button>
  <button type="button" @click="push">push</button>
  <button type="button" @click="replace">replace</button>
  <button type="button" @click="go">go</button>
  <hr />
  <button type="button" @click="addRoute">新增路由</button>
</template>

<script>
export default {
  methods: {
    //包含歷史紀錄
    push() {
      //this.$router.push('/newpage/dynamicRouter/ff3ddb3e35abd84e') //動態路由($route)
      this.$router.push({
        name: 'about'
      }) //動態路由($route)
    },
    //沒有上一頁歷史紀錄()
    replace() {
      //this.$router.push('/newpage/dynamicRouter/ff3ddb3e35abd84e') //動態路由($route)
      this.$router.replace({
        name: 'about'
      }) //動態路由($route)
    },
    //操作歷史紀錄
    go() {
      //this.$router.go(-1) //返回上一頁
      this.$router.go(1) //前進下一頁
    },
    //取得常用參數
    getRoute() {
      //取得路由屬性
      //https://router.vuejs.org/zh/api/#routelocationnormalized
      // ex：this.$route.fullPath (取得目前網址完整路徑)
      // console.log(this.$route)
      //呼叫路由的方法
      //https://router.vuejs.org/zh/api/#addroute
      // ex：this.$router.go(-1) (返回上一頁)
      console.log(this.$router)
    },
    //動態新增路由
    addRoute() {
      // ex：this.$router.addRoutes(routes)
      // console.log(this.$router)
      this.$router.addRoute({
        path: '/newAbout',
        name: 'newAbout',
        component: () => import('./AboutView.vue')
      })
    }
  }
}
</script>
