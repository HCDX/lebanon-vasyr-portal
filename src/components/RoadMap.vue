<template style="background-color: #273b56;">
	<div id="road-map" style="background-color: #273b56;">
		<div class="row roadmap-main-container contained">
			<div v-for="(group, index) in roadMapData" v-bind:key="index" class="col col-md-2 col-12" style="color: white;">
				<div class="info-container" :class="{'text-top' : group.top, 'text-bottom' : !group.top}">
					<!-- remove the v-id from both text containers to have them both present if the original design is needed -->
					<div class="info-text" v-if="group.top">
						<div class="text">
							{{group.description}}
						</div>
					</div>
					<div class="title-container">
						<div class="info-icon">
							<img alt="Icon" :src="require('@/assets' + group.icon)"/>
						</div>
						<div class="title">
							{{group.title}}
						</div>
					</div>
					<!-- remove the v-id from both text containers to have them both present if the original design is needed -->
					<div class="info-text" v-if="!group.top">
						<div class="text">
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

	export default {
		name: 'road-map',
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

.info-icon {
	width: 86px;
	height: 86px;
	margin: auto;
	background-color: white;
	border-radius: 50px;
	position: relative;
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
}

.text-top  .info-text:last-child {
	visibility: hidden;
}

.text-bottom  .info-text:first-child {
	visibility: hidden;
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
}


</style>