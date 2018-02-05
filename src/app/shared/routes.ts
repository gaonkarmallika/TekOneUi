import { Routes } from '@angular/router';
import { AppComponent } from './../app.component';
export const routes: Routes = [
  {
    path: 'dashboard',
    component: AppComponent
  },
  {
    path: 'orders',
    component: AppComponent,
    children: [
      { path: 'overview', component: AppComponent },
      { path: 'specs', component: AppComponent }
    ]
  }


  /*{
     path: 'products',
     component:AppComponent
   },
   {
     path: 'customers',
     component:AppComponent
   },
   {
     path: 'reporters',
     component:AppComponent
   },
 {
 path: 'integrations',
 component:AppComponent
 },
 {
   path: 'currentMonth',
     component:AppComponent
   },
   {
     path: 'lastQuater',
     component:AppComponent
   },
   {
     path: 'socialEngagement',
     component:AppComponent
   },
   {
     path: 'yearEndSale',
     component:AppComponent
   }*/
];
