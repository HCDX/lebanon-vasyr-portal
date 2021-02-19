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
      <li class="menu-item" :class="{'is-active' : currentActive === '/'}">
        <a href="#" v-on:click="scrollTo('/')">HOME</a>
      </li>
      <li class="menu-item" :class="{'is-active' : currentActive === 'chapters'}">
        <a href="#" v-on:click="scrollTo('chapters')">CHAPTERS</a>
      </li>
      <li class="menu-item" :class="{'is-active' : currentActive === 'maps'}">
        <a href="#" v-on:click="scrollTo('maps')">MAPS</a>
      </li>
      <li class="menu-item" :class="{'is-active' : currentActive === 'reports'}">
        <a href="#" v-on:click="scrollTo('reports')">REPORTS</a>
      </li>
      <li class="menu-item" :class="{'is-active' : currentActive === 'tools'}">
        <a href="#" v-on:click="scrollTo('tools')">TOOLS</a>
      </li>
      <li class="menu-item" :class="{'is-active' : currentActive === 'vault'}">
        <a href="#" v-on:click="scrollTo('vault')">VAULT</a>
      </li>
      <li class="menu-item">
        <a href="http://ialebanon.unhcr.org/DataHub/" target="_blank">REQUEST</a>
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
      setTimeout(() => {
        
        this.chaptersPosition = this.$parent.$el.querySelector('#chapters').offsetTop - 75;
        this.mapsPosition = this.$parent.$el.querySelector('#maps').offsetTop - 75;
        this.reportPosition = this.$parent.$el.querySelector('#reports').offsetTop - 75;
        this.toolsPosition = this.$parent.$el.querySelector('#tools').offsetTop - 75;
        this.vaultPosition = this.$parent.$el.querySelector('#vault').offsetTop - 75;
        this.scrollPosition();
        
      }, 1000);
      window.addEventListener('scroll', this.scrollPosition);
    } else {
      this.currentActive = window.location.hash.slice(2, window.location.hash.length);
    }

    this.mainPosition = 0;
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
  background-color: var(--var-theme-background);
  font-family: 'Montserrat-Bold' !important;
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
    background-color: var(--var-theme-background);
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
