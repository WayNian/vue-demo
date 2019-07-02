<template>
  <div>
    <div
      v-for="(item, index) in articleList"
      :key="index"
      style="padding: 10px;"
    >
      <p>{{ item.title }}</p>
      <a :href="item.link" target="_blank">{{ item.link }}</a>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  mounted() {
    this.getAricle();
  },
  computed: {
    ...mapState("dashboard", {
      articleList: "articleList"
    })
  },
  methods: {
    ...mapActions("dashboard", {
      getAricle: "getAricle"
    })
  }
};
</script>

<style lang="scss" scoped></style>
