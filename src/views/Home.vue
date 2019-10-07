<template>
  <div class="home">
    <Main />
    <RoadMap />
    <Chapters />
    <Maps />
    <Reports />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/Main.vue'
import RoadMap from '@/components/RoadMap.vue'
import Chapters from '@/components/Chapters.vue'
import Maps from '@/components/Maps.vue'
import Reports from '@/components/Reports.vue'

export default {
  name: 'home',
  components: {
    Main,
    RoadMap,
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