<!-- 产品列表 -->
<template>
  <div class="listWrap">
    <ProductsItem v-for="(item,index) in productsList" :data="item" :key="index"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductsItem from '@/components/ProductsItem'
export default {
  components: {
    ProductsItem
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({ productsList: 'productsList' })
  },
  methods: {}
}
</script>
<style lang='less' scoped>
.listWrap{
  padding: 0 10px;
  background: #fff;
}
</style>
