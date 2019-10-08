<template>
<nav class="navbar navbar-expand-lg navbar-dark menu-container">
  <a class="navbar-brand logo-container" href="#">
    <img alt="vasyr logo" src="@/assets/logo.png">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="menu-items col">
      <li v-for="item in menuItems" v-bind:key="item.item" class="menu-item" :class="{'is-active' : item.url === currentActive}">
        <a href="#" v-if="item.isScrollable && currentActive === '/'" v-on:click="scrollTo(item.url)">{{item.item}}</a>
        <router-link v-if="item.isScrollable && currentActive !== '/'" to="/" v-on:click.native="scrollTo(item.url)">{{item.item}}</router-link>
        <router-link v-if="!item.isScrollable" :to="item.url" v-on:click.native="setCurrentActive(item.url)">{{item.item}}</router-link>
      </li>
    </ul>
  </div>
</nav>

</template>

<script>
import DataService from '@/services/data.service';
import helper from '@/helpers/helpers';

export default {
  name: 'TopMenu',
  data: () => ({
    dataService: new DataService(),
    menuItems: '',
    currentActive: '/',
    mainPosition: 0,
    chaptersPosition: 0,
    mapsPosition: 0,
    reportPosition: 0,
    clickedLink: false
  }),
  mounted() {
    this.menuItems = this.dataService.getTopMenuData();
    
    if(window.location.hash === '#/') {
      this.currentActive = window.location.hash.slice(1, window.location.hash.length);
    } else {
      this.currentActive = window.location.hash.slice(2, window.location.hash.length);
    }

    this.mainPosition = 0;


    setTimeout(() => {
      
      this.chaptersPosition = this.$parent.$el.querySelector('#chapters').offsetTop - 75;
      this.mapsPosition = this.$parent.$el.querySelector('#maps').offsetTop - 75;
      this.reportPosition = this.$parent.$el.querySelector('#reports').offsetTop + 75;
      this.scrollPosition();
      
    }, 1000);
    window.addEventListener('scroll', this.scrollPosition);
  },
  methods: {
    scrollTo(url) {
      this.clickedLink = true;
      this.currentActive = url;
      let container = this.$parent.$el.querySelector('#' + url);
      helper.scrollTo('#' + url, 800);
   
    },
    setCurrentActive(url) {
      this.clickedLink = true;
      this.currentActive = url;
      if(url === '/')
      helper.scrollTo('#home', 1000);
    },
    scrollPosition() {
      // if(!this.clickedLink && this.mapsPosition){
      //   switch(true) {
      //     case (window.scrollY > this.chaptersPosition - 75 && window.scrollY < this.mapsPosition - 75):
      //       this.currentActive = 'chapters';
      //       break;
  
      //     case (window.scrollY > this.mapsPosition - 75 && window.scrollY < this.reportPosition - 200):
      //       this.currentActive = 'maps';
      //       break;
  
      //     case (window.scrollY >= this.reportPosition - 200):
      //       this.currentActive = 'reports';
      //       break;
  
      //     default:
      //       this.currentActive = '/';
      //   }
      // }
    },
    scrollToSmoothly(pos, time, callBack){
      // if(isNaN(pos)){
      //   throw "Position must be a number";
      // }

      // if(pos < 0){
      //   throw "Position can not be negative";
      // }

      // let currentPos = window.scrollY || window.screenTop;
      
      // if(currentPos < pos){
      //   time = time || 2;
      //   let x;
      //   let i = currentPos;
      //   let parent = this;

      //   x = setInterval(function(){
      //     console.log(i);
      //     window.scrollTo(0, i);
      //     if(i >= pos) {
      //       clearInterval(x);
      //       callBack();
      //     }
      //     i += helper.easeOutQuad(1);
      //   }, time);
      // } else {
      //   time = time || 2;
      //   let i = currentPos;
      //   let x;

      //   x = setInterval(function(){
      //     window.scrollTo(0, i);
      //     if(i <= pos){
      //       clearInterval(x);
      //       callBack();
      //     }

      //     i -= 10;
      //   }, time);
      // }
    },
    afterScroll() {
      this.clickedLink = false;
    },
    easeIn(step, currentPos, originalPos) {
      console.log(step, originalPos, currentPos);
      return step - (originalPos / currentPos);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo-container {
  width: 125px;
  height: 75px;
  padding: 13px 0;
  margin-left: 30px;
  float: left;
}

.logo-container img {
  max-width:100%;
  max-height:100%;
}

.menu-container {
  margin: 0;
  height: 75px;
  background-color: #273b56;
}

.menu-container li a {
  color: white;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
}

.menu-container li a:hover {
  color: white;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
}

li.is-active {
  border-bottom: 2px solid white; 
  padding-bottom: 5px;
}

.align-right {
  float: right;
}

.menu-items {
  margin: 0px;
  padding: 0px;
  text-align: right;
  padding-right: 30px;
}

.menu-item {
  display: inline-block;
  margin: 25px 20px;
  padding: 0px;
}

@media screen and (max-width: 804px)  {
  .menu-container {
    height: fit-content;
    background-color: #273b56;
  }

  .menu-items {
    margin: 0px;
    padding: 0px;
    text-align: center;
  }

  .menu-item {
    display: block;
    margin: 25px 20px;
    padding: 0px;
  }
}
</style>
