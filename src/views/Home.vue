<template>
  <div class="home">
    <Main />
    <RoadMap />
    <Chapters />
    <Maps />
    <Reports />
    <Tools />
    <Vault />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/views/Main.vue'
import RoadMap from '@/views/RoadMap.vue'
import Chapters from '@/views/Chapters.vue'
import Maps from '@/views/Maps.vue'
import Reports from '@/views/Reports.vue'
import Tools from '@/views/Tools.vue'
import Vault from '@/views/Vault.vue'

export default {
  name: 'home',
  components: {
    Main,
    RoadMap,
    Chapters,
    Maps,
    Reports,
    Tools,
    Vault
  }
}
</script>
<style scoped>
.home {
  height: 100%;
}
</style>