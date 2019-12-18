<template>
  <div id="training" class="modal fade light" :class="{'show': show }" >
    <div class="dialog">
      <div class="page-title">
        <hr class="horizontal-ruler">
        <h3> Training Material </h3>
        <hr class="horizontal-ruler">
      </div>
      <div class="training-main-container contained d-flex">
        <div class="row align-self-start" style="margin: 0px auto; padding: 50px 0; width: 100%;">
          <div class="table-search-container row">
            <div class="col-1 col-md-6 col-lg-8"></div>
            <div class="table-search col col-md-6 col-lg-4">
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search Table" aria-label="Recipient's username" aria-describedby="basic-addon2" v-model="searchText">
              </div>
            </div>
          </div>
          <div class="table-container table-responsive">
            <table id="trainingTable" class="table table-striped">
              <thead>
                <tr>
                  <th v-on:click="sortData('id')" scope="col" style="width: 10%">ID</th>
                  <th v-on:click="sortData('sector')" scope="col" style="width: 10%">SECTOR</th>
                  <th v-on:click="sortData('indicator')" scope="col" style="width: 40%">INDICATOR</th>
                  <th v-on:click="sortData('year')" scope="col" style="width: 8%">YEAR</th>
                  <th v-on:click="sortData('download_link')" scope="col" style="width: 5%">DOWNLOAD FILE</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in filteredTrainingData" v-bind:key="index">
                  <td scope="row">{{item.id}}</td>
                  <td>{{item.sector}}</td>
                  <td>{{item.indicator}}</td>
                  <td>{{item.year}}</td>
                  <td><a :href="item.download_link" target="_blank" download>Link</a></td>
                </tr>
              </tbody>
            </table>
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-end">
                <li class="page-item">
                  <a class="page-link" v-on:click="goToPage(1)">First</a>
                </li>
                <li class="page-item">
                  <a class="page-link" v-on:click="goToPreviousPage()">Previous</a>
                </li>
                <li class="page-item page-number" v-for="(p, index) in pagesToShow" v-bind:key="index" v-bind:class="{ active: p === page }">
                  <a class="page-link" v-on:click="goToPage(p)">{{p}}</a>
                </li>
                <li class="page-item">
                  <a class="page-link"  v-on:click="goToNexPage()">Next</a>
                </li>
                <li class="page-item">
                  <a class="page-link"  v-on:click="goToPage(numberOfPages)">Last</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
	import DataService from '@/services/data.service';
  import helper from '@/helpers/helpers';

	export default {
    name: 'TrainingDialog',
    data: () => ({
      dataService: new DataService(),
      trainingData: [],
      currentSort: 'id',
      sortDirection: 'asc',
      searchText: '',
      previousSearch: '',
      page: 1,
      numberOfPages: '',
      pagesToShow: [1, 2, 3, 4, 5],
      show: false
		}),
		mounted() {
      this.trainingData = this.dataService.getTrainingData().map(function(data) {
        data.searchable = [
          data.id,
          data.sector,
          data.indicator,
          data.year,
          data.download_link
        ]
        .join('')
				.toLowerCase()
        .replace(/\s/g, '');
        
        return data;
      });
    },
    computed: {
      filteredTrainingData() {
        let searchingFor = this.searchText.toLowerCase().replace(/\s/g, "");
        if(this.searchText != this.previousSearch) {
          this.page = 1;
          this.previousSearch = this.searchText;
        }
        if (searchingFor.length) {
          var list = this.trainingData.filter(function(p) {
            return p.searchable.indexOf(searchingFor) > -1;
          });
          let paginatedData = helper.paginate(list, this.page, 5);
          this.numberOfPages = paginatedData.total_pages;
          this.pagesToShow = paginatedData.pages_to_show;
          return paginatedData.data;
        } else {
          var list = this.trainingData
          let paginatedData = helper.paginate(list, this.page, 5);
          this.numberOfPages = paginatedData.total_pages;
          this.pagesToShow = paginatedData.pages_to_show;
          return paginatedData.data;
        }
      },
    },
    methods: {
      sortCategory(category) {
        if(category === this.currentSort) {
          this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        }

        this.currentSort = category;
      },
      sortData(category) {
        this.sortCategory(category);
        this.trainingData.sort((a, b) => {
          let directionModifier = this.sortDirection === 'asc' ? 1 : -1;
          if(a[this.currentSort] < b[this.currentSort]) return -1 * directionModifier;
          if(a[this.currentSort] > b[this.currentSort]) return 1 * directionModifier;
          return 0;
        })
      },
      goToPage(page) {
        this.page = page;
      },
      goToNexPage() {
        if(this.page < this.numberOfPages) {
          this.page += 1;
        }
      },
      goToPreviousPage() {
        if(this.page > 1) {
          this.page -= 1;
        }
      }
    }
	}
</script>
<style scoped>

[v-cloak] {
  display: none;
}

.show {
  display: block;
}

.light#training {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: white;
  color: #273b56;
}

.dark#training {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #273b56;
  color: white;
}

.light .horizontal-ruler {
  margin: 0 0 .5rem 0;
  border-top-color: rgba(39, 59, 86, 0.44);
}

.dark .horizontal-ruler {
  margin: 0 0 .5rem 0;
  border-top-color: rgba(255, 255, 255, 0.44);
}

.contained {
  max-width: 1400px;
  margin: auto !important;
}

.training-main-container {
  min-height: calc(100% - 51px);
}

.page-title {
  height: 51px;
}

.table-container {
  width: 85%;
  margin: auto;
}

.dark .table-container .table tr{
  color: white;
  font-size: 14px;
  height: 70px;
  line-height: 16px;
}

.dark .table-container .table tr a{
  color: white;
  font-size: 14px;
}

.dark .table-container .table tbody tr:nth-of-type(odd){
  background: #5d6f87;
}

.light .table-container .table tr{
  color: #273b56;
  font-size: 14px;
  height: 70px;
  line-height: 16px;
}

.light .table-container .table tr a{
  color: #273b56;
  font-size: 14px;
}

.table-container .table thead tr th {
  cursor: pointer;
}

.table-search-container {
  width: 85%;
  margin: auto;
}

.btn-outline-white {
  color: #ffffff;
  border-color: #ffffff;
}

.btn:hover {
  color: #b5b6b7;
  text-decoration: none;
}

.page-item a {
  background: transparent;
  cursor: pointer;
}

.page-item.page-number {
  width: 43px;
}

.dialog {
  background: red;
  height: 90%;
  width: 90%;
  margin: 40px auto;
}
</style>