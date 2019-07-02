import Vue from "vue";
import Router from "vue-router";
import Layout from "./views/layout/index.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("./views/dashboard/index.vue")
        }
      ]
    },
    {
      path: "/article",
      component: Layout,
      children: [
        {
          path: "create",
          name: "create",
          component: () => import("./views/article/ArticleCreate.vue")
        }
      ]
    }
  ]
});
