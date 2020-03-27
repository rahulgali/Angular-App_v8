import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppElementModule } from './app/app.element.module';
import { Environment } from './environments/environment';

if (Environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppElementModule)
  .catch(err => console.error(err));
