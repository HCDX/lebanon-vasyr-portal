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
import Main from '@/components/Main.vue'
import RoadMap from '@/components/RoadMap.vue'
import Chapters from '@/components/Chapters.vue'
import Maps from '@/components/Maps.vue'
import Reports from '@/components/Reports.vue'
import Tools from '@/components/Tools.vue'
import Vault from '@/components/Vault.vue'

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