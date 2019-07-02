<template>
  <section class="main-layout">
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-layout {
}
</style>
