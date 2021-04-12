import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/services';

import { ElectronicTextbookComponent } from './electronic-textbook';
import { MainLayoutComponent } from './core/';
import { PageNotFoundComponent } from './core';
import { HomePageComponent } from './home-page';
import { StatisticsComponent } from './statistics';
import { AboutUsComponent } from './about-us/about-us.component';

const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'registration',
    loadChildren: () => import('./auth/registration/registration.module').then((m) => m.RegistrationModule),
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'text-book', component: ElectronicTextbookComponent },
      { path: 'statistics', component: StatisticsComponent, canActivate: [AuthGuard] },
      { path: 'about-us', component: AboutUsComponent },
    ],
  },
  {
    path: 'mini-games',
    loadChildren: () => import('./mini-games/mini-games-routing.module').then((m) => m.MiniGamesRoutingModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
