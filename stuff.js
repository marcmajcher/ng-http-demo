(() => {
  'use strict';

  const app = angular.module('demo', []);

  const bookFun = function bookFun($http) {
    const vm = this;

    vm.clickMe = () => {
      $http.get('/data.json')
        .then((response) => {
          vm.books = response.data.books;
        });
    };
  };

  bookFun.$inject = ['$http'];

  app.component('bookGetter', {
    controller: bookFun,
    templateUrl: './template.html'
  });

})();
