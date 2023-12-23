import { inject, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { WebAPI } from '../static/web-api';

@inject(WebAPI)
export class App {
  public router: Router;

  constructor(public api: WebAPI) { }

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Contacts';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { route: '', moduleId: PLATFORM.moduleName('no-selection'), title: 'Select' },
      { route: 'contacts/:id', moduleId: PLATFORM.moduleName('contact-detail'), name: 'contacts' }
    ]);

    this.router = router;
  }
}
