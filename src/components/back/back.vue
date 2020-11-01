<template>
  <div class="back_component">
    <div class="back_component_title">
      <i @click="goBack"></i>
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped lang="scss">
.back_component_title {
  line-height: 40px;
  padding: 10px 0;
  margin-top: 21px;
  span {
    color: white;
    font-size: 16px;
    user-select: none;
  }
  i:before {
    content: "";
    width: 16px;
    height: 16px;
    display: inline-block;
    border-top: 2px solid $color_hover;
    border-left: 2px solid $color_hover;
    vertical-align: middle;
    margin-right: 15px;
    cursor: pointer;
    @include webkit(transform, rotate(-45deg));
  }
}
</style>