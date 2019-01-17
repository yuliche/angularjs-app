angular.module('myApp.home', [])
.controller('homeCtrl',[function(){
	this.welcomeText = 'Welcome to myApp Home!';
}]);

// import template from './home.html';

// class Controller {
//     /** @ngInject */
//     constructor() {}

//     showText() {
//         this.text = 'Hello from about component';
//     }
// }

// export const HomeComponent = {
//     template,
//     controller: Controller
// };