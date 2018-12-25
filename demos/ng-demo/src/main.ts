import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule, {
    // 使用 BEM 不需要 css module
    defaultEncapsulation: ViewEncapsulation.None
})
    .catch(err => console.error(err));
