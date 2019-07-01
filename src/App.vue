<template>
  <div id="app">
    <el-container>
      <div class="layout">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <div v-for="(item, index) in navList" :key="index">
            <el-submenu :index="item.path" v-if="item.children">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ item.title }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  v-for="(itemChild, indexChild) in item.children"
                  :key="indexChild"
                  :index="itemChild.path"
                  >{{ itemChild.title }}</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item :index="item.path" v-else>
              <i class="el-icon-menu"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </div>
        </el-menu>
        <section class="main-layout">
          <el-header>
            <el-button type="text" @click="isCollapse = !isCollapse"
              >展开/收起</el-button
            >
          </el-header>
          <router-view />
        </section>
      </div>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false,
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
.main-layout {
  flex: 1;
  max-height: 100vh;
  overflow: auto;
}
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
.el-header {
  background-color: #0097bd;
}
</style>
