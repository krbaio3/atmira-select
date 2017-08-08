import * as angular from 'angular';
import atSelectComponent from './atmiraSelect.component';

require('../styles/atmiraSelect.scss');

export const Atselect = angular.module('atSelect', [])
    .component('atSelect',atSelectComponent)
    .name;