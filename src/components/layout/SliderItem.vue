<template>
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
</template>

<script>
export default {
  name: "SliderItem",
  props: ["item"]
};
</script>

<style lang="scss" scoped></style>
