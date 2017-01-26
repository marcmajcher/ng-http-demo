(() => {
  'use strict';

  console.log('I LIVE');
  const app = angular.module('demo', []);

  const bookFun = () => {

  };

  app.component('bookGetter', {
    controller: bookFun,
    templateUrl: './template.html'
  });

})();
