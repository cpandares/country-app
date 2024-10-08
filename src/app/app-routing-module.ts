import { NgModule } from '@angular/core';

import { Routes,RouterModule } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact/contact-page.component';


export const routes: Routes = [
   
    {
        path: 'countries',
        loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)  
    },
    {
        path:'**',
        redirectTo: 'countries',
        pathMatch: 'full'
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule { }
