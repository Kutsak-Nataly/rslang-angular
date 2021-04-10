import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ElectronicTextbookComponent} from "./electronic-textbook";
import {LoginComponent} from "./auth/login";
import {RegistrationComponent} from "./auth";
import {MainLayoutComponent} from "./core/";
import {PageNotFoundComponent} from "./core/index";
import { HomePageComponent } from './home-page';
import { MiniGamesComponent } from './mini-games';
import { StatisticsComponent } from './statistics';
import { AboutUsComponent } from './about-us/about-us.component';
import { DictionaryComponent } from './dictionary';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: '',
    component: MainLayoutComponent, children: [
      {path: 'text-book', component: ElectronicTextbookComponent},
      // {path: 'dictionary', loadChildren: "./dictionary/dictionary.module.ts"},
      {path: 'dictionary', loadChildren: () => import('./dictionary/dictionary.module').then(m => m.DictionaryModule)},
      {path: 'words-list', loadChildren: () => import('./words-list/words-list.module').then(m => m.WordsListModule)},
      {path: 'mini-games', component: MiniGamesComponent},
      {path: 'statistics', component: StatisticsComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: '', component: HomePageComponent}
    ]
  },
  // {path: 'dictionary', loadChildren: () => import('./dictionary/dictionary.module').then(m => m.DictionaryModule)},
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
