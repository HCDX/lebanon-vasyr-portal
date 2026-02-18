<template class="road-map">
	<div id="road-map" class="road-map">
		<div class="row roadmap-main-container contained">
			<div v-for="(group, index) in roadMapData" v-bind:key="index" class="col col-12 col-sm-6 col-md-4 col-lg-2" style="color: white;">
				<div class="info-container" :class="{'text-top' : group.top, 'text-bottom' : !group.top}">
					<!-- remove the v-id from both text containers to have them both present if the original design is needed -->
					<div class="info-text">
						<div class="text" v-if="group.top">
							{{group.description}}
						</div>
					</div>
					<div class="title-container">
						<div class="info-icon" v-if="group.scrollLocation" v-on:click="scrollTo(group.scrollLocation)">
							<img alt="Icon" :src="getImageUrl(group.icon)"/>
						</div>
						<div class="info-icon" v-if="group.url" >
							<a :href="group.url" target="_blank">
								<img alt="Icon" :src="getImageUrl(group.icon)"/>
							</a>
						</div>
						<div class="title">
							{{group.title}}
						</div>
					</div>
					<!-- remove the v-id from both text containers to have them both present if the original design is needed -->
					<div class="info-text">
						<div class="text" v-if="!group.top">
							{{group.description}}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import DataService from '@/services/data.service';
  import helper from '@/helpers/helpers';
  import { useAssets } from '@/composables/useAssets';

	export default {
		name: 'road-map',
    setup() {
      const { getImageUrl } = useAssets();
      return { getImageUrl };
    },
		data: () => ({
			dataService: new DataService(),
			roadMapData: []
		}),
		mounted() {
			this.roadMapData = this.dataService.getRoadMapData();
		},
    methods: {
      scrollTo(url) {
        this.clickedLink = true;
        this.currentActive = url;
        let parent = this;

        if(url === '/') {
          helper.scrollTo('#main', 1500).then(function(response) {
            if(response) {
              parent.afterScroll();
            }
          });
        } else {
          helper.scrollTo('#' + url, 1500).then(function(response) {
            if(response) {
              parent.afterScroll();
            }
          });
        }
      },
      setCurrentActive(url) {
        this.clickedLink = true;
        this.currentActive = url;
        let parent = this;

        if(url === '/') {
          helper.scrollTo('#main', 1500).then(function(response) {
            if(response) {
              parent.afterScroll();
            }
          });
        }
      },
      scrollPosition() {
        if(!this.clickedLink && this.mapsPosition){
          let chaptersEndPosition = this.elementEndPosition('chapters');
          let mapsEndPosition = this.elementEndPosition('maps');
          let reportEndPosition = this.elementEndPosition('reports');
          let toolsEndPosition = this.elementEndPosition('tools');
          let vaultEndPosition = this.elementEndPosition('vault');

          switch(true) {
            case (window.scrollY >= this.chaptersPosition && window.scrollY < chaptersEndPosition):
              this.currentActive = 'chapters';
              break;
    
            case (window.scrollY >= this.mapsPosition && window.scrollY < mapsEndPosition):
              this.currentActive = 'maps';
              break;
    
            case (window.scrollY >= this.reportPosition && window.scrollY < reportEndPosition):
              this.currentActive = 'reports';
              break;

            case (window.scrollY >= this.toolsPosition && window.scrollY < toolsEndPosition):
              this.currentActive = 'tools';
              break;

            case (window.scrollY >= this.vaultPosition && window.scrollY < vaultEndPosition):
              this.currentActive = 'vault';
              break;
    
            default:
              this.currentActive = '/';
              break;
          }
        }
      },
      afterScroll() {
        this.clickedLink = false;
      },
      elementEndPosition(element) {
        let elementStartPosition = document.getElementById(element).offsetTop - 75;
        let elementHeight = document.getElementById(element).offsetHeight;
        let elementEndPosition = elementStartPosition + elementHeight;

        return elementEndPosition;
      }
    }
	}
</script>
<style scoped>

.road-map {
	background-color: var(--var-theme-background);
}

.contained {
  max-width: 1400px;
  margin: auto !important;
}

.roadmap-main-container {
	margin: 0px;
	height: 100%;
	padding: 0 40px;
	text-align: center;
}

.info-container {
	margin: 40px 0;
}

.title-container {
	height: 206px;
	padding: 60px 0;
	position: relative;
}

.title {
	height: 30px;
	position: absolute;
	width: 100%;
	text-align: center;
	bottom: 20px;
}

.text-top .title {
	bottom: 20px;
}

.text-bottom .title {
	top: 25px;
}

.text-top .text {
	position: absolute;
	bottom: 5px;
	left: 0;
	right: 0;
}

.text-bottom .text {
	position: absolute;
	top: 5px;
	left: 0;
	right: 0;
}

.info-icon {
	width: 86px;
	height: 86px;
	margin: auto;
	background-color: white;
	border-radius: 50px;
	position: relative;
	cursor: pointer;
}

.info-icon::before {
	content: '';
	display: block;
	height: 50px;
	width: 2px;
	position: absolute;
	background-color: white;
	left: calc(50% - 1px);
	z-index: 3;
}

.info-icon img {
	width: 75%;
	margin: auto;
	padding: 14px 0;
}

.text-top .info-icon::before {
	top: -50px; /*43px + size;*/
}

.text-bottom .info-icon::before {
	top: 86px;
}

.info-icon::after {
	content: '';
	display: block;
	height: 8px;
	width: 8px;
	position: absolute;
	z-index: 4;
	border-radius: 200px;
	background-color: white;
	left: calc(50% - 4px);
}

.text-top .info-icon::after {
	top: -53px;
}

.text-bottom .info-icon::after {
	top: 135px;
}

.info-text {
	font-size: 13px;
	width: 130%;
	margin-left: -15%;
	height: 135px;
	position: relative;
}

.text-top  .info-text:last-child {
	visibility: hidden;
}

.text-bottom  .info-text:first-child {
	visibility: hidden;
}

@media screen and (max-width: 1250px){
	.info-text {
		font-size: 13px;
		width: 150%;
		margin-left: -25%;
		height: 155px;
		position: relative;
	}
}

@media screen and (max-width: 1024px){
	.info-text {
		font-size: 13px;
		width: 150%;
		margin-left: -25%;
		height: 200px;
		position: relative;
	}
}

@media screen and (max-width: 991px){
	.info-text {
		font-size: 13px;
		width: 130%;
		margin-left: -15%;
		height: 95px;
		position: relative;
	}
}

@media screen and (max-width: 804px)  {
	.main-container {
		padding: 0px;
	}

	.info-container {
		margin: 0;
		padding: 10px;
		border: 1px solid #bbb;
		margin: 10px;
		height: 95%;
	}

	.info-text {
		width: 100%;
		margin-left: -0;
	}

	.info-text {
		height: auto;
		min-height: 0;
	}

	.text-top  .info-text:last-child {
		display: none;
	}

	.text-bottom  .info-text:first-child {
		display: none;
	}

	.text-top .text {
		position: relative;
		bottom: 5px;
	}

	.text-bottom .text {
		position: relative;
		top: 5px;
	}
}


</style>