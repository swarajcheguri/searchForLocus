import angular from 'angular';
import { main } from './directives/main/main-directive'
import MainCtrl from './directives/main/main-ctrl'
import dataService from './services/data-service';
import customFilter from './filters/customFilter';
import '../style/app.css';


const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('mainDir', main)
  .controller('mainctrl',MainCtrl)
  .filter('customFilter',customFilter)
  .factory('data', ['$http', dataService]);

export default MODULE_NAME;