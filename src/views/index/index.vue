<template>
  <div>
    <!-- 汽车信息 -->
    <!-- <cartInfo /> -->
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
import navBtn from "../../components/navBtn/index";
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
      const router = this.$route;
      return router.name === "Index" ? false : true;
    }
  },
  watch: {},
  created() {},
  mounted() {
    document.addEventListener("mouseup", e => {
      const userCon = document.getElementById("nav-view");
      if (userCon && !userCon.contains(e.target)) {
        this.$router.push({
          name: "Index"
        });
      }
    });
  },
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
  @include webkit(transition, all 0.3s ease 0s);
  @include webkit(box-shadow, -5px 0 38px 0 rgba(0, 0, 0, 0.4));
  &.open {
    width: 410px;
  }
}
</style>
