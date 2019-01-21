import template from './about.html';

class Controller {
    /** @ngInject */
    constructor() {
        this.text = 'Hello from about component';
    }
}

export const AboutComponent = {
    template,
    controller: Controller
};