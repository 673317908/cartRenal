<template>
  <div>
    <el-amap vid="amapDemo" class="amap-demo" :zoom="zoom" :center="center" :events="events"></el-amap>
  </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  data() {
    return {
      map:null,
      zoom: 18,
      center: [121.5273285, 31.21715058],
      events: {
        init(o) {
          let marker = new AMap.Marker({
            position: [121.5273285, 31.21715058]
          });

          marker.setMap(o);
        }
      }
    };
  },
  created() {},
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      // your code ...
      this.map = new AMap.Map("amapDemo", {
        center: new AMap.LngLat(121.59996, 31.197646)
      });
    });
  },
  methods: {}
};
</script>

<style scoped lang="scss">
div {
  height: 100vh;
}
</style>
