'use strict';

(function() {

class MainController {

  constructor() {
    console.debug('MainController loaded!');
  }
  
}

angular.module('doItApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
