import template from './home.html';

class Controller {
    /** @ngInject */
    constructor() {}

    showText() {
        this.text = 'Hello from about component';
    }
}

export const HomeComponent = {
    template,
    controller: Controller
};