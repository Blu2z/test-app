'use strict';

(function() {

class AdminController {

  constructor($http, Notification) {
    this.$http = $http;
    this.notification = Notification;
    this.catalog = [];
    this.productEdit = '';
  }

  getData() {
    this.$http.get('/api/catalog').then(response => {
      this.catalog = response.data;
    });
  }

  $onInit() {this.getData();}

  addProduct() {
    if (!this.productEdit.name || !this.productEdit.text) {
      this.notification.warning('Нужно заполнить все поля');
      return;
    }

    var res = this.productEdit._id ? this.$http.put('/api/catalog/' + this.productEdit._id, this.productEdit) : this.$http.post('/api/catalog', this.productEdit);

    res
      .error(() => {
        this.notification.error('Ой! Что-то пошло не так...');
      })
      .success(() => {
        this.productEdit = '';
        this.notification.success('Данные успешно добавлены в базу!');
        this.getData();
      });   
  }

  deleteProduct(id) {
    this.$http.delete('/api/catalog/' + id);
    this.notification.success('Данные успешно удалены из базы!');
    this.productEdit = '';
    this.getData();
  }

  editProduct(product) {
    this.productEdit = product;
  }
}

angular.module('doItApp')
  .component('admin', {
    templateUrl: 'components/admin/admin.html',
    controller: AdminController
  });

})();
