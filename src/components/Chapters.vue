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
            <button type="button" class="btn btn-info">DOWNLOAD CHAPTER</button>
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
  }
}
</script>
<style scoped>
#chapters {
  background-color: #273b56;
  color: white;
  /* height: 100%; */
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
}

.chapter-info .buttons {
  height: 90px;
  padding: 5px;
}

.chapter-info .buttons button {
  margin: 0 10px;
  font-size: 11px;
}
</style>