<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>

        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>

        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>

      <div class="support-count">
        <span class="count ">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bullletin-wrapper"></div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  data () {
    return {
      detailShow: false,
      classMap: []
    }
  }
}
</script>

<style lang="stylus">
@import "../../common/stylus/icon"
@import "../../common/stylus/mixin"
// @import "../../common/stylus/style.css"
.header
  background-color #666
  .content-wrapper
    position relative
    padding 24px 12px 18px 24px
    font-size 0
    color white
    .avatar
      display inline-block
      vertical-align top
      img
        border-radius 2px
    .content
      display inline-block
      margin-left 16px
      .title
        margin 2px 0 8px 0
        .brand
          display inline-block
          width 30px
          height 18px
          bg-image(brand)
          background-size contain
          background-repeat no-repeat
        .name
          vertical-align top
          margin-left 6px
          font-size 16px
          line-height 18px
          font-weight bold
      .description
        margin-bottom 10px
        font-size 12px
        line-height 12px
      .support
        .icon
          display inline-block
          width 12px
          height 12px
          margin-right 4px
          background-size 12px 12px
          background-repeat no-repeat
          vertical-align top
          &.decrease
            bg-image('decrease_1')
          &.discount
            bg-image('discount_1')
          &.guarantee
            bg-image('guarantee_1')
          &.invoice
            bg-image('invoice_1')
          &.special
            bg-image('special_1')
        .text
          line-height 12px
          font-size 10px
    .support-count
      position absolute
      right 12px
      bottom 18px
      padding 0 8px
      height 24px
      line-height 24px
      border-radius 14px
      background-color rgba(0, 0, 0, .2)
      text-align center
      .count
        font-size 10px
      .icon-keyboard_arrow_right
        font-size 10px
</style>
