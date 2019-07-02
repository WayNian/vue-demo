<template>
  <section class="main-container">
    <mavon-editor class="mavon-editor" :ishljs="true" v-model="value" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.mavon-editor {
  width: 100%;
  height: calc(100vh - 80px);
  z-index: 1;
}
</style>
