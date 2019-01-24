import template from './home.html';

class Controller {
  /** @ngInject */
  constructor() {
    this.text = 'Hello from home component';
  }

  changeText() {
    this.text = 'Changed text fom home component';
  }
}

export const HomeComponent = {
  template,
  controller: Controller
};