<template>
  <div id="tools" class="light">
    <div class="page-title">
      <hr class="horizental-ruler">
      <h3> TOOLS </h3>
      <hr class="horizental-ruler">
    </div>
    <div class="tools-main-container contained d-flex">
      <div class="row align-self-center" style="margin: auto; padding: 50px 0; width: 100%;">
        <div v-for="(tool, index) in tools" v-bind:key="index" class="col col-md-3 col-12">
          <div class="tool-container">
            <div class="tool-icon" data-toggle="tooltip" data-html="true" v-tooltip:top="tool.description">
              <a v-if="tool.url" :href="tool.url" target="_blank"><img alt="Tool Icon" :src="require('@/assets' + tool.icon)"/></a>
              <a v-if="tool.download_url" :href="tool.download_url" target="_blank" download><img alt="Tool Icon" :src="require('@/assets' + tool.icon)"/></a>
            </div>
            <div class="tool-title">
              {{tool.title}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <training-dialog></training-dialog>
  </div>
</template>
<script>
	import DataService from '@/services/data.service';
  import TrainingDialog from '@/components/TrainingTable.vue';

	export default {
		name: 'tools',
		data: () => ({
			dataService: new DataService(),
			tools: []
		}),
		mounted() {
      this.tools = this.dataService.getToolsData();
    },
    components: {
      TrainingDialog
    }
	}
</script>
<style scoped>
.light#tools {
  position: relative;
  background-color: white;
  color: var(--var-theme-text-dark);
  height: 100%;
}

.dark#tools {
  position: relative;
  background-color: var(--var-theme-background);
  color: white;
  height: 100%;
}

.light .horizental-ruler {
  margin: 0 0 .5rem 0;
  border-top-color: rgba(39, 59, 86, 0.44);
}

.dark .horizental-ruler {
  margin: 0 0 .5rem 0;
  border-top-color: rgba(255, 255, 255, 0.44);
}

.contained {
  max-width: 1400px;
  margin: auto !important;
}

.tools-main-container {
  min-height: calc(100% - 51px);
}

.page-title {
  height: 51px;
}

.light .tools-main-container .tool-container {
  width: 50%;
  margin: auto;
}

.light .tools-main-container .tool-container .tool-icon {
  width: 50%;
  margin: auto;
}

.light .tools-main-container .tool-container .tool-icon img {
  width: 100%;
}

.light .tools-main-container .tool-container .tool-title {
  padding: 10px;
}

.dark .tool-container {
  width: 50%;
  margin: auto;
}

.dark .tool-container .tool-icon {
  width: 100px;
  margin: auto;
  height: 100px;
  background: white;
  border-radius: 100%;
}

.dark .tool-container .tool-icon img {
  width: 70%;
  padding: 17px 0;
}

.dark .tool-container .tool-title {
  padding: 10px;
}

@media screen and (max-width: 804px)  {
  .light#tools {
    height: auto;
  }

  .dark#tools {
    height: auto;
  }
}
</style>