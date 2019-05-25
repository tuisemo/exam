<!-- 订单配送表单 -->
<template>
  <div>
    <div class="styleForm">
      <mt-field label="商品名称" placeholder="请输入商品名称" disableClear readonly :value="params.name"></mt-field>
      <mt-field label="商品描述" placeholder="请输入商品描述" disableClear readonly :value="params.des"></mt-field>
      <mt-field label="价格" placeholder="价格" disableClear readonly :value="'￥'+params.price"></mt-field>
    </div>
    <div class="styleForm">
      <mt-field label="数量" placeholder="请填写数量" disableClear type="number" v-model="params.totalNum"></mt-field>
      <mt-field label="姓名" placeholder="请填写姓名" v-model="params.userName"></mt-field>
      <mt-field label="电话" placeholder="请填写电话" type="tel" v-model="params.mobile"></mt-field>
      <mt-field label="地址" placeholder="请填写地址" v-model="params.address"></mt-field>
      <mt-field label="特殊要求" placeholder="请填写特殊要求" v-model="params.special"></mt-field>
    </div>
    <div class="fixedBar">
      <div class="priceBar">￥{{totalMoney}}</div>
      <div class="submitBar" @click="validate">确认购买</div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      id: null,
      params: {
        name: null,
        des: null,
        price: 0,
        totalNum: 1,
        userName: null,
        mobile: null,
        address: null,
        special: null
      }
    }
  },
  computed: {
    ...mapState(['productsList']),
    ...mapGetters(['productsObj']),
    totalMoney () {
      return this.params.totalNum * this.params.price
    }
  },
  mounted () {
    const { id } = this.$route.params
    this.id = id
    this.params = { ...this.params, ...this.productsObj[id] }
  },

  methods: {
    validate () {
      const Reg = {
        totalNum: /^[1-9]{1}[\d]*$/
      }
      if (!this.params.userName || !this.params.mobile || !this.params.address) {
        Toast({
          message: '请将姓名、手机、地址填写完整',
          position: 'center',
          duration: 5000
        })
        return false
      }
      if (!Reg.totalNum.test(this.params.totalNum)) {
        Toast({
          message: '商品数量请输入大于0的正整数',
          position: 'center',
          duration: 5000
        })
        return false
      }
      this.submit()
    },
    submit () {
      const data = {
        ...this.params,
        orderTime: Date.now(),
        totalMoney: this.totalMoney
      }
      this.$store.commit('SUBMIT_ORDER', data)
      this.$router.push({ path: '/OrderList' })
    }
  }
}
</script>
<style lang='less'>
.styleForm {
  text-align: left;
  color: #999;
  margin-bottom: 10px;
}
.divider {
  display: block;
  content: "";
  width: 100%;
  height: 5px;
}
.mint-field-core {
  text-align: right;
}
.fixedBar {
  position: fixed;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  border-top: 1px solid #eee;
  display: flex;
  font-size: 18px;
  .priceBar {
    flex-grow: 1;
    color: #26a2ff;
    text-align: right;
    padding: 0 15px;
  }
  .submitBar {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 15px;
    background: #26a2ff;
    color: #fff;
    cursor: pointer;
  }
}
</style>
