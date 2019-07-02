<template>
  <div>
    <el-menu
      :default-active="defActive"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <slider-item
        v-for="(item, index) in navList"
        :key="index"
        :item="item"
      ></slider-item>
    </el-menu>
  </div>
</template>
<script>
import { mapState } from "vuex";
import SliderItem from "./SliderItem";
export default {
  components: {
    SliderItem
  },
  data() {
    return {
      navList: [
        {
          title: "首页",
          path: "/"
        },
        {
          title: "仪表盘",
          path: "/dashboard"
        },
        {
          title: "文章管理",
          path: "",
          children: [
            {
              title: "创建文章",
              path: "/article/create"
            },
            {
              title: "管理文章",
              path: "/article/manage"
            }
          ]
        }
      ]
    };
  },
  computed: {
    ...mapState("setting", {
      isCollapse: "isCollapse"
    }),
    defActive() {
      const path = this.$route.path;
      console.log(path);
      return path;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100vh;
}
.el-menu--collapse {
  height: 100vh;
}
.el-menu {
  border-right: 0;
  max-height: 100vh;
  overflow: auto;
}
</style>
