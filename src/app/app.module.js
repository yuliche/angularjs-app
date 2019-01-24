import angular from 'angular';
import { componentsModule } from './components/components.module';
import { sharedModule } from './shared/shared.module';
import uiRouter from '@uirouter/angularjs';
import ngMaterial from 'angular-material';
import routesConfig from './app.routes';
import { AppComponent } from './app.component';
import style from '../assets/scss/style.scss';

angular
  .module('myApp', [uiRouter, ngMaterial, componentsModule, sharedModule])
  .config(routesConfig)
  .component('app', AppComponent);
