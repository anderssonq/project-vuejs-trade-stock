import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from 'vue-resource';
import { routes } from "./routers";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store/store";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root='https://vuejs-stock-trader-4bf99.firebaseio.com/';
Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  store,
  render: h => h(App),
  router
});
