import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import uigrid from 'angular-ui-grid';
import touch from 'angular-touch';
import animate from 'angular-animate';
import services from '../../services';
import 'angular-ui-grid/ui-grid.css';
import './edit.less';
import routing from './edit.routes';
import EditController from './edit.controller';

export default angular.module('app.edit', [uirouter, uigrid, touch, animate, services])
    .config(routing)
    .controller('EditController', EditController)
    .name;