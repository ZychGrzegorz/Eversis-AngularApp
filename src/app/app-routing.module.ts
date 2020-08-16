import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserAccessComponent } from './components/user-access/user-access.component';
import { UserDataComponent } from './components/user-data/user-data.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'userData', component: UserDataComponent },
  { path: 'userAccess', component: UserAccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
