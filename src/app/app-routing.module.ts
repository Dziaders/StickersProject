import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './auth-guard.guard';

export const appRoutes: Routes = [  
{ path: '', component: HomepageComponent, pathMatch: 'full'},
{ path: 'about', component: AboutComponent},
{ path: 'how-to-use', component: HowToUseComponent},
{ path: 'gallery', component: GalleryComponent, canActivate:[AuthGuardGuard]},
{ path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
