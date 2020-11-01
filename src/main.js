import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 地图
import "./plugin/aMap"
// 字体图标
import "./styles/font/font_1967286_un82lt3ktar/iconfont.css"
// 全局组件
import "./components/back/index"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
