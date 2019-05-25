<!-- 订单列表 -->
<template>
  <div>
    <OrderItem v-for="(item,index) in orderList" :key="index" :data="item"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import OrderItem from '@/components/OrderItem'
export default {
  data () {
    return {}
  },
  components: { OrderItem },
  computed: {
    ...mapState(['orderList'])
  },
  methods: {}
}
</script>
<style lang='less' scoped>
</style>
