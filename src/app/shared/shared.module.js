import angular from 'angular';
import { HeaderComponent } from './header/header';

export const sharedModule = 'myApp.shared';

angular
  .module(sharedModule, [])
  .component('header', HeaderComponent);