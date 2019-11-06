<template>
  <div id="vault" class="dark">
    <div class="page-title">
      <hr class="horizental-ruler">
      <h3> VAULT </h3>
      <hr class="horizental-ruler">
    </div>
    <div class="vault-main-container contained d-flex">
      <div class="row align-self-center" style="margin: auto; padding: 50px 0; width: 100%;">
        <div class="table-container">
          <table class="table table-striped">
            <thead>
              <tr>
                <th v-on:click="sortData('id')" scope="col" style="width: 10%">ID</th>
                <th v-on:click="sortData('sector')" scope="col" style="width: 3%">SECTOR</th>
                <th v-on:click="sortData('indicator')" scope="col" style="width: 45%">INDICATOR</th>
                <th v-on:click="sortData('download_link')" scope="col" style="width: 15%">DOWNLOAD FILE</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in vaultData" v-bind:key="index">
                <th scope="row">{{item.id}}</th>
                <td>{{item.sector}}</td>
                <td>{{item.indicator}}</td>
                <td><a href="#" target="_blank">{{item.download_link}}</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
	import DataService from '@/services/data.service';

	export default {
		name: 'vault',
		data: () => ({
			dataService: new DataService(),
      vaultData: [],
      currentSort: 'id',
      sortDirection: 'asc'
		}),
		mounted() {
      this.vaultData = this.dataService.getVaultData();
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
      }
    }
	}
</script>
<style scoped>
.light#vault {
  background-color: white;
  color: #273b56;
}

.dark#vault {
  background-color: #273b56;
  color: white;
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
}

.light .table-container .table tr a{
  color: #273b56;
  font-size: 14px;
}

.table-container .table thead tr th {
  cursor: pointer;
}

</style>