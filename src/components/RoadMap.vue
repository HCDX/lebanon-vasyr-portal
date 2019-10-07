<template>
  <div id="road-map" style="background-color: #273b56;">
    <div class="row main-container">
      <div class="col col-md-2 col-12" style="color: white;">
        <div class="info-container">
          <div class="text-top">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </div>
          <div class="circular-logo-container">
          </div>
          <div class="title push-top">
            CHAPTERS
          </div>
          <div class="text-bottom">
          </div>
        </div>
      </div>
      <div class="col col-md-2 col-12" style="color: white;">
        <div class="info-container">
          <div class="text-top">
          </div>
          <div class="title push-bottom">
            MAPS
          </div>
          <div class="circular-logo-container">
          </div>
          <div class="text-bottom">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </div>
        </div>
      </div>
      <div class="col col-md-2 col-12" style="color: white;">
        <div class="info-container">
          <div class="text-top">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </div>
          <div class="circular-logo-container">
          </div>
          <div class="title push-top">
            CHAPTERS
          </div>
          <div class="text-bottom">
          </div>
        </div>
      </div>
      <div class="col col-md-2 col-12" style="color: white;">
        <div class="info-container">
          <div class="text-top">
          </div>
          <div class="title push-bottom">
            MAPS
          </div>
          <div class="circular-logo-container">
          </div>
          <div class="text-bottom">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </div>
        </div>
      </div>
      <div class="col col-md-2 col-12" style="color: white;">
        <div class="info-container">
          <div class="text-top">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </div>
          <div class="circular-logo-container">
          </div>
          <div class="title push-top">
            CHAPTERS
          </div>
          <div class="text-bottom">
          </div>
        </div>
      </div>
      <div class="col col-md-2 col-12" style="color: white;">
        <div class="info-container">
          <div class="text-top">
          </div>
          <div class="title push-bottom">
            MAPS
          </div>
          <div class="circular-logo-container">
          </div>
          <div class="text-bottom">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DataService from '@/services/data.service';

export default {
  name: 'main-sec',
  data: () => ({
    dataService: new DataService(),
    roadMapData: []
  }),
  mounted() {
    this.roadMapData = this.dataService.getRoadMapData();
  }
}
</script>
<style scoped>
.main-container {
  margin: 0px;
  height: 100%;
  padding: 0 40px;
  text-align: center;
}

.description-text-container {
  height: 115px;
  overflow: hidden;
}

.circular-logo-container {
  height: 85px;
}

.title {
  height: 30px;
}

.text-top {
  height: 120px;
  overflow: hidden;
}

.text-bottom {
  height: 120px;
  overflow: hidden;
}

.description-text {
  font-size: 13px;
  height: 100px;
}

.title.push-top {
  padding-top: 10px;
}

.title.push-bottom {
  padding-bottom: 10px;
}

.info-container {
  margin: 40px 0;
}

.circle-filled {
  width: 11px;
  height: 11px;
  margin: auto;
  background-color: white;
  border-radius: 50px;
}

.linker-line {
  width: 1px;
  height: 50px;
  margin: auto;
  background-color: white;
}

.circular-logo-container {
  width: 85px;
  height: 85px;
  margin: auto;
  background-color: white;
  border-radius: 50px;
}
</style>