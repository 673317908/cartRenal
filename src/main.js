import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 地图
import "./plugin/aMap"
// 字体图标
import "./styles/font/font_1967286_uahl8uy1q6o/iconfont.css"
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
