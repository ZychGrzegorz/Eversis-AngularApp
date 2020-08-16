import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { UserAccessComponent } from './components/user-access/user-access.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    UserDataComponent,
    UserAccessComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
