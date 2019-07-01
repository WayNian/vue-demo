import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/home.vue")
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("./views/dashboard/index.vue")
    }
  ]
});
