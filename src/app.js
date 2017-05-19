import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import routing from './app.config';
import home from './features/home';
import edit from './features/edit';

angular.module('app',[uirouter, home, edit])
    .config(routing);