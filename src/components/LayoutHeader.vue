<!--  -->
<template>
  <div>
    <mt-header class="header-title" :title="title">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right" @click="toogle"></mt-button>
    </mt-header>
    <div class="mask" v-show="maskShow" @click="hide">
      <div class="menuList">
        <div class="menuItem" @click="toMyOrder">我的订单</div>
        <div class="menuItem" @click="reLoad">刷新</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '首页',
      maskShow: false
    }
  },
  watch: {
    $route: {
      handler (val) {
        const {
          meta: { title }
        } = val
        this.title = title
      },
      immediate: true
    }
  },
  methods: {
    toogle () {
      this.maskShow ? this.hide() : this.show()
    },
    show () {
      this.maskShow = true
    },
    hide () {
      this.maskShow = false
    },
    toMyOrder () {
      this.$router.push({ path: '/OrderList' })
    },
    reLoad () {
      this.$store.dispatch('getProductsList')
    }
  }
}
</script>
<style lang='less'>
.mint-header {
  background: #fff !important;
  color: #666 !important;
  border-bottom: 0.5px solid #eee;
}
.header-title {
  font-size: 16px !important;
}
.mask {
  position: absolute;
  z-index: 99;
  width: 100%;
  height: 100%;
  top: 40px;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(191, 191, 191, 0.6);
  .menuList {
    &::before{
      display: block;
      position: absolute;
      content: '';
      width: 10px;
      height: 10px;
      right: 10px;
      top: -5px;
      background: #fff;
      transform: rotate(45deg);
    }
    display: block;
    position: relative;
    float: right;
    width: 100px;
    top:10px;
    right: 10px;
    .menuItem{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 30px;
      background: #fff;
      border-bottom: 0.5px solid #eee;
    }
  }
}
</style>
