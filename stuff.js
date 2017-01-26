(() => {
  'use strict';

  console.log('I LIVE');
  const app = angular.module('demo', []);

  const bookFun = function bookFun($http) {
    const vm = this;

    vm.clickMe = () => {
      console.log('CLAAACKD!111');
      $http.get('/data.json')
        .then((response) => {
          console.log('DAAAAATAAA');
          console.log(response.data);
          vm.books = response.data;
        });
    };
  };

  bookFun.$inject = ['$http'];

  app.component('bookGetter', {
    controller: bookFun,
    templateUrl: './template.html'
  });

})();
