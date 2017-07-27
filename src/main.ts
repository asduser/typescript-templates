import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare let jQuery: any;

if (environment.production) {
  enableProdMode();
} else {
  console.log( jQuery(document) );
}

platformBrowserDynamic().bootstrapModule(AppModule);
