<template>
  <div class="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <div v-if="$route.name !== 'login' &&  $route.name !== 'register'" class="footer tab border-1px">
      <div v-if="$route.name === 'home' ||  $route.name === 'centerSlice' ||$route.name === 'category'|| $route.name === 'userinfo'" class="footer tab border-1px">
        <router-link class="tab-item home" v-bind:to="'home'">
          <span class="icon-uniF0D1F9"></span>
          <p>首页</p>
        </router-link>
        <router-link class="tab-item category" v-bind:to="'category'">
          <span class="icon-uniF091F9"></span>
          <p>项目</p>
        </router-link>
        <router-link class="tab-item" v-bind:to="'userinfo'">
          <span class="icon-shopping_cartF9"></span>
          <p>矿机</p>
        </router-link>
        <router-link class="tab-item" v-bind:to="'centerSlice'">
          <span class="icon-uniF1A2F9"></span>
          <p>我的</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss" scoped type="text/css">
.app {
    height: 100%;
    width: 100%;
    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
        height: 40px;
        padding-top: 4px;
        padding-bottom: 4px;
        background: #fff;
        border-top: 1px solid #eee;
        .tab-item {
            flex: 1;
            text-align: center;
            span {
                font-size: 22px;
            }
            p {
                font-size: 10px;
            }
            &.router-link-active {
                color: #f56c02;
            }
        }
    }
}
</style>
