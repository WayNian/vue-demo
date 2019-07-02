<template>
  <div>
    <el-container>
      <div class="layout">
        <slider-menu></slider-menu>
        <section class="app-layout">
          <app-header></app-header>
          <app-main></app-main>
        </section>
      </div>
    </el-container>
  </div>
</template>

<script>
import AppHeader from "../../components/layout/AppHeader";
import SliderMenu from "../../components/layout/SliderMenu";
import AppMain from "../../components/layout/AppMain";
export default {
  components: {
    AppHeader,
    SliderMenu,
    AppMain
  }
};
</script>

<style lang="scss">
.app-layout {
  flex: 1;
  max-height: 100vh;
  overflow: auto;
}
</style>
