<template>
  <div id="vault" class="light">
    <div class="page-title">
      <hr class="horizental-ruler">
      <h3> VAULT </h3>
      <hr class="horizental-ruler">
    </div>
    <div class="vault-main-container contained d-flex">
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
          <table id="vaultTable" class="table table-striped">
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
              <tr v-for="(item, index) in filteredVaultData" v-bind:key="index">
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
</template>
<script>
	import DataService from '@/services/data.service';
  import helper from '@/helpers/helpers';
  import _ from 'lodash';
  
  export default {
		name: 'vault',
		data: () => ({
			dataService: new DataService(),
      vaultData: [],
      currentSort: 'id',
      sortDirection: 'asc',
      searchText: '',
      debouncedSearchText: '',
      previousSearch: '',
      page: 1,
      numberOfPages: '',
      pagesToShow: [1, 2, 3, 4, 5]
		}),
		mounted() {
      this.vaultData = this.dataService.getVaultData().map(function(data) {
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

      // Initial sort by year
      this.sortCategory('year');
      this.sortData('year');
    },
    watch: {
      searchText: _.debounce(function(newVal) {
        this.debouncedSearchText = newVal;
      }, 500)
    },
    computed: {
      filteredVaultData() {
        let searchTextDecapitalized = this.debouncedSearchText.toLowerCase();
        let searchingFor = searchTextDecapitalized.split(' ');
        var list = null;

        if(searchingFor.length > 1) {
          searchingFor = searchingFor.filter(function(item) {
            return item !== "";
          })
        }

        if(this.debouncedSearchText !== this.previousSearch) {
          this.page = 1;
          this.previousSearch = this.debouncedSearchText;
        }

        if (searchingFor.length && searchTextDecapitalized) {
          list = this.vaultData.filter(function(p) {
            let data = p;
            let allFound = true;

            let list = searchingFor.filter(function(searchTerm) {
              if(data.searchable.indexOf(searchTerm) === -1 ) {
                allFound = false;
              }

              return data.searchable.indexOf(searchTerm) > -1;
            })

            if(list.length > 0 && allFound) {
              return list;
            }
          });

          let paginatedData = helper.paginate(list, this.page);
          this.numberOfPages = paginatedData.total_pages;
          this.pagesToShow = paginatedData.pages_to_show;
          return paginatedData.data;
        } else {
          list = this.vaultData;
          let paginatedData = helper.paginate(list, this.page);
          this.numberOfPages = paginatedData.total_pages;
          this.pagesToShow = paginatedData.pages_to_show;
          return paginatedData.data;
        }
      }
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
        this.vaultData.sort((a, b) => {
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
      },
    }
	}
</script>
<style scoped>
.light#vault {
  background-color: white;
  color: #273b56;
  height: 1200px;
}

.dark#vault {
  background-color: var(--var-theme-background);
  color: white;
  height: 1045px;
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

.vault-main-container {
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

</style>