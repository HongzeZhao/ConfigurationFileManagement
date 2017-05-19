import angular from 'angular';
import apiService from './api.service';

export default angular.module('app.services', [])
    .factory('apiService', apiService)
    .name;