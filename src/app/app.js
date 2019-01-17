import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';

require('./components/home/home.js');
require('./components/about/about.js');

// import {componentsModule} from './components/components.module';
// import {sharedModule} from './shared/shared.module';

import {AboutComponent} from './components/about/about';
// import {HomeComponent} from './components/home/home';

var app = angular
.module('myApp', [uiRouter,ngMaterial,'myApp.home','myApp.about']);

app.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/");
	
	$stateProvider
	.state('home', {
		url: "/",
		views : {
			"" : {
				templateUrl:"app/components/home/home.html"
			},
			"header@home":{
				templateUrl:"app/shared/header/header.html"
			}
		}
	})
	.state('about', {
		url: "/about",
		views : {
			"" : {
				templateUrl:"app/components/about/about.html"
			},
			"header@about":{
				templateUrl:"app/shared/header/header.html"
			}
		}
	});
});
