<template>
  <div id="chapters">
    <div class="page-title">
      <hr style="margin: 0 0 .5rem 0; border-top-color: rgba(255, 255, 255, 0.35)">
      <h3> CHAPTERS </h3>
      <hr style="margin: 1px 0; border-top-color: rgba(255, 255, 255, 0.35)">
    </div>
    <div class="row chapters-main-container contained" style="margin: 0;" flex>
      <div v-for="(chapter, index) in chapters" v-bind:key="index" class="col col-md-6 col-lg-4 col-12 chapter">
        <div class="chapter-image top" v-if="(chapter.textPosition === 'bottom')">
          <img alt="Chapter Image" :src="require('@/assets/' + chapter.image_url)"/>
        </div>
        <div class="chapter-info">
          <div class="title">
            {{chapter.title}}
          </div>
          <div class="description">
            {{chapter.description}}
          </div>
          <div class="buttons">
            <!-- <a class="btn btn-info" v-if="chapter.download_url" :href="chapter.download_url" target="_blank" download>DOWNLOAD CHAPTER</a>
            <a class="btn btn-info pointer-cursor" v-if="!chapter.download_url" v-on:click="openDialog">DOWNLOAD CHAPTER</a> -->




            <div class="dropdown">
              <button class="btn btn-info dropdown-toggle" type="button" id="chaptersDropDown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                DOWNLOAD CHAPTER
              </button>
              <div class="dropdown-menu" aria-labelledby="chaptersDropDown">
                <a v-for="(version, index) in chapter.versions" v-bind:key="index" class="dropdown-item" :href="version.download_url" target="_blank" download>{{version.year}}</a>
              </div>
            </div>




            
          </div>
        </div>
        <div class="chapter-image bottom" v-if="(chapter.textPosition === 'top')">
          <img alt="Chapter Image" :src="require('@/assets/' + chapter.image_url)"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DataService from '@/services/data.service';

export default {
  name: 'chapters',
  data: () => ({
    dataService: new DataService(),
    chapters: []
  }),
  mounted() {
    console.log('Mounted Chapters');
    this.chapters = this.dataService.getChaptersData();
  },
  methods: {
    openDialog() {
      console.log('test');
      this.$modal.show('download-modal');
    }
  }
}
</script>
<style scoped>
#chapters {
  background-color: var(--var-theme-background);
  color: white;
  /* height: 100%; */
}

.btn-info {
  background-color: transparent !important;
  border-color: white !important;
}

.btn-info:hover {
  background-color: transparent !important;
  border-color: var(--var-theme-button-info-hover) !important;
}


.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: .5rem 0;
    margin: .125rem 0 0;
    font-size: 1rem;
    color: white;
    text-align: left;
    list-style: none;
    background-color: transparent;
    background-clip: padding-box;
    border: none;
}

.dropdown-item {
    width: 100%;
    padding: .25rem 1.5rem;
    margin: 1px !important;
    clear: both;
    font-weight: 400;
    color: white;
    text-align: inherit;
    white-space: nowrap;
    background-color: var(--var-theme-button-info);
    border-radius: 5px;
}

.dropdown-item:focus, .dropdown-item:hover {
    color: white;
    text-decoration: none;
    background-color:var(--var-theme-button-info-hover);
}

.contained {
  max-width: 1400px;
  margin: auto !important;
}

.page-title {
  height: 52px;
}

.chapters-main-container {
  height: calc(100% - 52px);
}

.chapter {
  padding-top: 40px;
  padding-bottom: 40px;
}

.chapter-image {
  width: 100%;
  height: 390px;
}

.chapter-image img {
  width: 100%;
  height: calc(100% - 100px);
  border-radius: 5px;
}

.chapter-image.bottom::before {
  content: '';
  display: block;
  border-left: 1px solid white;
  width: 1px;
  height: 100px;
  margin: auto;
}

.chapter-image.top::after {
  content: '';
  display: block;
  border-left: 1px solid white;
  width: 1px;
  height: 100px;
  margin: auto;
}

.chapter-info {
  height: 290px;
  border: 1px solid white;
  border-radius: 5px;
}

.chapter-info .title {
  height: 60px;
  padding: 17px 20px;
  font-weight: bold;
}

.chapter-info .title::after {
  content: '';
  display: block;
  border-bottom: 1px solid white;
  margin: 0 25px;
}

.chapter-info .description {
  height: 140px;
  padding: 0px 20px 10px 20px;
  font-size: 12px;
  font-family: 'Montserrat';
}

.chapter-info .buttons {
  height: 90px;
  padding: 5px;
}

.chapter-info .buttons a {
  margin: 0 10px;
  font-size: 11px;
}

.pointer-cursor {
  cursor: pointer;
}

</style>