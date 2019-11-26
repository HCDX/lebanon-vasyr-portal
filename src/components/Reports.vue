<template>
  <div id="reports">
    <div class="page-title">
      <hr style="margin: 0 0 .5rem 0; border-top-color: rgba(255, 255, 255, 0.35)">
      <h3> REPORTS </h3>
      <hr style="margin: 1px 0; border-top-color: rgba(255, 255, 255, 0.35)">
    </div>
    <div class="row reports-main-container contained" style="margin: 0;" flex>
      <div v-for="(report, index) in reports" v-bind:key="index" class="col col-md-4 col-lg-3 col-12 no-padding" style="color: white; overflow: hidden;">
        <div class="report-container">
          <div class="download-overlay">
            <div class="download-section">
              <div style="font-size: 40px; font-weight: bold;">{{report.year}}</div>
              <a :href="report.download_url" target="_blank" class="btn btn-info" download>Download</a>
            </div>
          </div>
          <div class="report-image">
            <img alt="report Image" :src="require('@/assets' + report.image_url)"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
	import DataService from '@/services/data.service';
  import helpers from '@/helpers/helpers';
  
	export default {
		name: 'reports',
		data: () => ({
			dataService: new DataService(),
			reports: []
		}),
		mounted() {
      console.log('Mounted Reports');
      this.reports = this.dataService.getReportsData();
		}
	}
</script>
<style scoped>
#reports {
  background-color: #273b56;
  color: white;
  min-height: 100%;
}

.report-container {
  position: relative;
  height: 376px;
}

.report-image img {
  height: 376px;
}

.no-padding {
  padding: 0;
}

.download-overlay{
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color:rgba(23, 162, 184, 0.6392156862745098);
  opacity: 0;
  transition: opacity 0.3s linear;
}

.download-overlay:hover {
  opacity: 1;
}

.download-section {
  padding: 139px 20px;
}
@media screen and (max-width: 1124px)  {
  .report-container {
    height: 270px;
  }

  .report-image img {
    height: 270px;
  }

  .download-section {
    padding: 86px 20px;
  }
}
</style>