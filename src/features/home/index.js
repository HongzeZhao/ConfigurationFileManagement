import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import './home.less';
import routing from './home.routes';
import HomeController from './home.controller';

export default angular.module('app.home', [uirouter])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;