angular.module('myApp.about', [])
    .controller('aboutCtrl', [function () {
        this.aboutText = 'This is the about component!';
    }]);

// import template from './about.html';

// class Controller {
//     /** @ngInject */
//     constructor() {}

//     showText() {
//         this.text = 'Hello from about component';
//     }
// }

// export const AboutComponent = {
//     template,
//     controller: Controller
// };