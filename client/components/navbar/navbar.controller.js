'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  },{
    'title': 'Catalog',
    'state': 'catalog'
  },{
    'title': 'Admin',
    'state': 'admin'
  }];

  isCollapsed = false;
  //end-non-standard

  constructor() {
    }
}

angular.module('doItApp')
  .controller('NavbarController', NavbarController);
