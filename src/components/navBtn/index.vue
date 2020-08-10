<template>
  <div id="navBtn">
    <ul>
      <li>
        <i class="iconfont icon-qm"></i>
      </li>
      <li>
        <i class="iconfont icon-sousuo"></i>
      </li>
      <li>
        <a href="javascript">选择车辆</a>
      </li>
      <li>
        <i class="iconfont icon-dingwei"></i>
      </li>
      <li @click="activeUser({name:'User'})">
        <i class="iconfont icon-user"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    activeUser(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped lang="scss">
// @import "";
#navBtn {
  z-index: 102;
  position: fixed;
  bottom: 84px;
  left: 33%;
  ul {
    li {
      display: inline-block;
      margin: 0 17px;
      a {
        padding: 20px 40px;
        border-radius: 40px;
        background-color: $color_main;
        color: white;
      }
    }
  }
}
</style>
