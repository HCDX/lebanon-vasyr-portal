<template>
  <div class="home">
    <Main />
    <Chapters />
    <Maps />
    <Reports />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/Main.vue'
import Chapters from '@/components/Chapters.vue'
import Maps from '@/components/Maps.vue'
import Reports from '@/components/Reports.vue'

export default {
  name: 'home',
  components: {
    Main,
    Chapters,
    Maps,
    Reports
  }
}
</script>
<style scoped>
.home {
  height: 100%;
}
</style>