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
            <div class="dropdown">
                <div class="row" style="margin: 0; width: 100%;">
                  <div class="col col-4" style="padding: 1px;" v-for="(version, index) in chapter.versions" v-bind:key="index">
                    <a v-on:click="trackDownload(chapter, version.year)" class="dropdown-item button-custom" :href="version.download_url" target="_blank" download>{{version.year}}</a>
                  </div>
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
    this.chapters = this.dataService.getChaptersData();
  },
  methods: {
    openDialog() {
      this.$modal.show('download-modal');
    },
    trackDownload(chapter, versionYear) {
      this.$gtag.event('file_download_clicked', {
        file_name: chapter.title + '-' + versionYear
      });
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
  background-color: var(--var-theme-button-info) !important;
  border-color: var(--var-theme-button-info) !important;
  color: var(--var-theme-button-info-text) !important;
}

.btn-info:hover {
  background-color: var(--var-theme-button-info-hover) !important;
  border-color: var(--var-theme-button-info-hover) !important;
  color: var(--var-theme-button-info-hover-text) !important;
}

.dropdown {
  padding: 0 90px;
}

.dropdown-toggle {
  width: 100%;
}

.dropdown-menu {
    position: absolute;
    padding: 2px 90px !important;
    width: 100%;
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

.dropdown-menu.show {
    display: block !important;
}

.dropdown-item {
    width: 100%;
    padding: .25rem 1.5rem;
    margin: 1px !important;
    clear: both;
    font-weight: 400;
    color: var(--var-theme-button-info-text) !important;
    text-align: inherit;
    white-space: nowrap;
    background-color: var(--var-theme-button-info);
    border-radius: 5px;
}

.dropdown-item:focus, .dropdown-item:hover {
    color: var(--var-theme-button-info-hover-text) !important;
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
  height: 150px;
  padding: 0px 20px 10px 20px;
  font-size: 12px;
  font-family: 'Montserrat';
}

.chapter-info .buttons {
  height: 70px;
  padding: 35px 5px 0px;
}

.chapter-info .buttons a {
  margin: 0 10px;
  font-size: 11px;
}

.pointer-cursor {
  cursor: pointer;
}

.button-custom {
  padding: 0.25rem 0.5rem;
}
  

</style>