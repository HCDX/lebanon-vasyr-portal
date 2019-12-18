<template>
  <div id="maps">
    <div class="page-title">
      <hr style="margin: 0 0 .5rem 0; border-top-color: rgba(255, 255, 255, 0.35)">
      <h3> MAPS </h3>
      <hr style="margin: 1px 0; border-top-color: rgba(255, 255, 255, 0.35)">
    </div>
    <div class="row maps-main-container contained" style="margin: 0;" flex>
      <div v-for="(map, index) in maps" v-bind:key="index" class="col col-12" style="color: white;">
        <div class="map-container">
          <div class="map-image" data-toggle="tooltip" data-html="true" v-tooltip:top="map.description">
            <a :href="map.url" target="_blank"><img alt="Map Image" :src="require('@/assets' + map.image)"/></a>
          </div>
          <div class="map-title">
            {{map.title}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
	import DataService from '@/services/data.service';

	export default {
		name: 'maps',
		data: () => ({
			dataService: new DataService(),
			maps: []
		}),
		mounted() {
      console.log('Mounted Maps');
      this.maps = this.dataService.getMapsData();
      setTimeout(() => {
        $(function () {
          $('[data-toggle="tooltip"]').tooltip()
        })
      }, 1000);
		}
	}
</script>
<style scoped>
#maps {
  background-color: #273b56;
  color: white;
  /* min-height: 100%; */
}

.contained {
  max-width: 1400px;
  margin: auto !important;
}

.map-image {
  border: 1px solid white;
  border-radius: 100%;
  margin: auto;
  width: 250px;
  height: 250px;
}

.map-image img {
  width: 100%;
  margin: auto;
  padding: 10px;
}

.map-image a {
  width: 100%;
  height: 100%;

}

.map-image:hover {
  cursor: pointer;
}

.maps-main-container {
  padding: 60px 0;
}

.map-container {
  padding: 20px 0;
}

.map-title {
  padding: 10px 0;
}
</style>