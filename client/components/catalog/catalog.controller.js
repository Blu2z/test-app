'use strict';

(function() {

class CatalogController {

  constructor($http) {
    this.$http = $http;
    this.catalog = [];
  }

  $onInit() {
    this.$http.get('/api/catalog').then(response => {
      this.catalog = response.data;
    });
  }
}

angular.module('doItApp')
  .component('cat', {
    templateUrl: 'components/catalog/catalog.html',
    controller: CatalogController
  });

})();
