import { Routes } from '@angular/router';
import { MainpageComponent } from './CafeWebsiteModule/mainpage/mainpage.component';

export const routes: Routes = [
    { path: 'home', component: MainpageComponent },
    { path: 'about_us', component: MainpageComponent },
    { path: 'gallery',component: MainpageComponent},
    { path:'offers',component: MainpageComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' } ,
    { path: '**', redirectTo: '/home', pathMatch: 'full' } 
  ];
