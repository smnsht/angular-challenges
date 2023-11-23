import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { appRoutes } from './app.routes';

const scrolling = withInMemoryScrolling({
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
});

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes, scrolling)]
};
