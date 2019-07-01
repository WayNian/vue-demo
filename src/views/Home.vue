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
  },
  methods: {}
};
</script>

<style lang="scss">
.mavon-editor {
  width: 100%;
  height: 90vh;
}
</style>
