import template from './home.html';

class Controller {
    /** @ngInject */
    constructor() {
    this.text = 'Hello from home component';
    }
}

export const HomeComponent = {
    template,
    controller: Controller
};