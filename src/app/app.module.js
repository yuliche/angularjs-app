import {componentsModule} from './components/components.module';
import {sharedModule} from './shared/shared.module';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';
import routesConfig from './app.routes';
import {AppComponent} from './app.component';

angular
.module('myApp', [uiRouter, 
    ngAnimate,
    ngMaterial,
    componentsModule,
    sharedModule,])
.config(routesConfig)
.component('app', AppComponent);
