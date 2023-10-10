<template>
  <div class="container">
    <nav>
      <NavBar></NavBar>
    </nav>
  </div>

</template>
<script setup lang="ts">
import NavBar from "@/layout/components/NavBar.vue";

</script>
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: #2c3e50;
}
.container nav {
  width: 100vw;
  height: 30px;
  background: #FFF;
  -webkit-app-region: drag;
}
</style>