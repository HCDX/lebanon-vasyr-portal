<template>
	<div id="road-map" style="background-color: #273b56;">
		<div class="row main-container">
			<div class="col col-md-2 col-12" style="color: white;">
				<div class="info-container text-top">
					<div class="info-text">
						<div class="text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate
						</div>
					</div>
					<div class="title-container">
						<div class="info-icon"></div>
						<div class="title">
							CHAPTERS
						</div>
					</div>
					<div class="info-text">
						<!-- Add same empty text above for design identical to the original design -->
					</div>
				</div>
			</div>
			<div class="col col-md-2 col-12" style="color: white;">
				<div class="info-container text-bottom">
					<div class="info-text">
					</div>
					<div class="title-container">
						<div class="info-icon"></div>
						<div class="title">
							MAPS
						</div>
					</div>
					<div class="info-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate
					</div>
				</div>
			</div>
			<div class="col col-md-2 col-12" style="color: white;">
				<div class="info-container text-top">
					<div class="info-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate
					</div>
					<div class="title-container">
						<div class="info-icon"></div>
						<div class="title">
							CHAPTERS
						</div>
					</div>
					<div class="info-text">
					</div>
				</div>
			</div>
			<div class="col col-md-2 col-12" style="color: white;">
				<div class="info-container text-bottom">
					<div class="info-text">
					</div>
					<div class="title-container">
						<div class="info-icon"></div>
						<div class="title">
							MAPS
						</div>
					</div>
					<div class="info-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate
					</div>
				</div>
			</div>
			<div class="col col-md-2 col-12" style="color: white;">
				<div class="info-container text-top">
					<div class="info-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate
					</div>
					<div class="title-container">
						<div class="info-icon"></div>
						<div class="title">
							CHAPTERS
						</div>
					</div>
					<div class="info-text">
					</div>
				</div>
			</div>
			<div class="col col-md-2 col-12" style="color: white;">
				<div class="info-container text-bottom">
					<div class="info-text">
					</div>
					<div class="title-container">
						<div class="info-icon"></div>
						<div class="title">
							MAPS
						</div>
					</div>
					<div class="info-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate
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