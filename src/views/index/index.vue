<template>
  <div>
    <!-- 汽车信息 -->
    <cartInfo />
    <!-- 导航按钮 -->
    <navBtn />
    <!-- 用户菜单栏 -->
    <div id="nav-view" :class="{open:show}">
      <router-view />
    </div>
    <!-- 地图 -->
    <aMap />
  </div>
</template>

<script>
import aMap from "./components/aMap";
import cartInfo from "./components/catInfo";
import navBtn from "../../components/navBtn/index"
export default {
  components: {
    aMap,
    cartInfo,
    navBtn
  },
  data() {
    return {};
  },
  computed: {
    show() {
      console.log(this.$route)
      const router = this.$route;
      return router.name === "Index" ? false : true;
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
#nav-view {
  position: fixed;
  top: 0px;
  right: 0px;
  width: 0px;
  height: 100%;
  background-color: #34393f;
  z-index: 101;
  &.open {
    width: 410px;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -ms-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
  }
}
</style>
