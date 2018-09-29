import Vue from "vue";
import router from "./router";
import App from "./App";
import store from "common/js/store";

import axios from "axios";
import "common/css/index.scss";
Vue.prototype.$ajax = axios;
axios.defaults.baseURL = "http://192.168.10.142:8080";

new Vue({
    el: "#app",
    router,
    store,
    // i18n,
    // linkActiveClass: "active", // 这个属性是设置当前被点击的a标签class名，为了方便设置选中项的样式
    template: "<App/>",
    components: {
        App
    }
});