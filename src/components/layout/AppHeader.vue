<template>
  <div>
    <el-header>
      <el-button type="text" @click="setCollapse">展开/收起</el-button>
    </el-header>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  computed: {},
  methods: {
    ...mapMutations("setting", {
      setCollapse: "setCollapse"
    })
  }
};
</script>

<style lang="scss" scoped>
.el-header {
  width: 100%;
  z-index: 9;
  background-color: cadetblue;
}
</style>
