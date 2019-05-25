<!-- 产品项 -->
<template>
  <div class="productsItem" :class="data.num?'':'empty'">
    <div class="PicPart">
      <img :src="data.pic" alt>
    </div>
    <div class="InfoPart">
      <div class="infoItem">
        <span class="name">{{data.name}}</span>
        <span class="num">{{data.num}}</span>
      </div>
      <div class="infoItem">
        <span class="des">{{data.des}}</span>
      </div>
      <div class="infoItem flex-end">
        <span class="price">￥{{data.price}}</span>
        <router-link :to="{path:`/OrderForm/${data.id}`}">
          <button class="button" v-if="data.num">购买</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {}
  },
  mounted () {
    console.log(this.data)
  },
  methods: {}
}
</script>
<style lang='less' scoped>
.productsItem {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 0.5px solid #eee;
  line-height: 1.5;
  background: #fff;
  .PicPart {
    width: 100px;
    height: 70px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .InfoPart {
    flex-grow: 1;
    padding-left: 10px;
    .infoItem {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &.flex-end {
        align-items: flex-end;
        line-height: 1;
      }
    }
  }
  .des{
    width: 200px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
  }
  .button {
    height: 30px;
    padding: 0 15px;
    color: #656b79;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 4px;
    color: inherit;
    outline: 0;
    overflow: hidden;
    position: relative;
    text-align: center;
    cursor: pointer;
  }
  a{
    cursor: pointer;
  }
  a > .button {
    cursor: pointer;
    color: #656b79;
  }
}
.name {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}
.des,
.num {
  color: #9c9c9c;
}
.price {
  font-size: 16px;
  color: #26a2ff;
}
.empty {
  .name,
  .des,
  .num,
  .price {
    color: #bfbfbf;
  }
}
image[lazy="loading"] {
  width: 100px;
  height: 70px;
  margin: auto;
}
</style>
