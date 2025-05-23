import {definePreset} from '@primeng/themes'
import Aura from '@primeng/themes/aura'

export const MyPreset = definePreset(Aura, {
    semantic: {
        colorScheme: {
            light: {
                primary:{
                    50: '{indigo.50}',
                    100: '{indigo.100}',
                    200: '{indigo.200}',
                    300: '{indigo.300}',
                    400: '{indigo.400}',
                    500: '{indigo.500}',
                    600: '{indigo.600}',
                    700: '{indigo.700}',
                    800: '{indigo.800}',
                    900: '{indigo.900}',
                    950: '{indigo.950}'
                },
                surface: {
                    0: '#ffffff',
                    50: '{zinc.50}',
                    100: '{zinc.100}',
                    200: '{zinc.200}',
                    300: '{zinc.300}',
                    400: '{zinc.400}',
                    500: '{zinc.500}',
                    600: '{zinc.600}',
                    700: '{zinc.700}',
                    800: '{zinc.800}',
                    900: '{zinc.900}',
                    950: '{zinc.950}'
                },
                highlight:{
                    background: 'rgba(250, 250, 250, .16)',
                    focusBackground: 'rgba(250, 250, 250, .24)',
                    color: 'rgba(0,0,0,.87)',
                    focusColor: 'rgba(0,0,0,.87)'
                }
            },
            dark: {
                primary:{
                    50: '{cyan.50}',
                    100: '{cyan.100}',
                    200: '{cyan.200}',
                    300: '{cyan.300}',
                    400: '{cyan.400}',
                    500: '{cyan.500}',
                    600: '{cyan.600}',
                    700: '{cyan.700}',
                    800: '{cyan.800}',
                    900: '{cyan.900}',
                    950: '{cyan.950}'
                },
                surface: {
                    0: '#000000',
                    50: '{zinc.950}',
                    100: '{zinc.900}',
                    200: '{zinc.800}',
                    300: '{zinc.700}',
                    400: '{zinc.600}',
                    500: '{zinc.500}',
                    600: '{zinc.400}',
                    700: '{zinc.300}',
                    800: '{zinc.200}',
                    900: '{zinc.100}',
                    950: '{zinc.50}'
                },
                highlight: {
                    background: 'rgba(250, 250, 250, .16)',
                    focusBackground: 'rgba(250, 250, 250, .24)',
                    color: 'rgba(255,255,255,.87)',
                    focusColor: 'rgba(255,255,255,.87)'
                }
            }
        }
    }
});