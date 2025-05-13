import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
// primeNG
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { MyPreset } from './styles';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(), 
    providePrimeNG({
            theme: {
                preset: MyPreset,
                options:{
                  darkModeSelector:'.my-app-dark',
                  cssLayer: {
                    name: 'primeng',
                    order: 'tailwind-base, primeng, tailwind-utilities'
                }
                }
            }
        })
  ]
};
