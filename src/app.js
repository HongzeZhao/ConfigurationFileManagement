import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import routing from './app.config';
import home from './features/home';

angular.module('app',[uirouter, home])
    .config(routing);