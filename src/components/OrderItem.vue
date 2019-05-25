<!-- 订单项 -->
<template>
  <div class="orderItem">
    <div class="titleBar">{{data.name}}</div>
    <div class="detailBar">
      <p>
        <label>时间：</label>
        <span class="sub">{{data.orderTime}}</span>
      </p>
      <p>
        <label>价格：</label>
        <span class="sub">￥{{data.totalMoney}}</span>
      </p>
      <p>
        <label>明细：</label>
        <span class="sub">{{data.des}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          name: null,
          orderTime: 0,
          totalMoney: 0,
          des: null
        }
      }
    }
  },
  data () {
    return {}
  },

  methods: {}
}
</script>
<style lang='less' scoped>
.orderItem {
  padding: 0 10px;
  background: #fff;
  margin-bottom: 10px;
}
.titleBar {
  display: flex;
  align-items: center;
  height: 45px;
  font-size: 18px;
  border-bottom: 0.5px solid #eee;
}
.detailBar {
  background: #fff;
  padding: 10px 0;
  p {
    margin: 0;
    line-height: 1.8;
  }
  label {
  }
  .sub {
    color: #999;
  }
}
</style>
