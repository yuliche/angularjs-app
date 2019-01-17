import angular from 'angular';

import {AboutComponent} from './about/about';
import {HomeComponent} from './home/home';

export const componentsModule = 'myApp.components';

angular
  .module(componentsModule, [])
  .component('about', AboutComponent)
  .component('home', HomeComponent);
