import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http'
import FamilyTree from "src/assets/balkanapp/familytree";
import { FamilyTreeComponent } from './family-tree/family-tree.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomepageComponent,
    LoginPageComponent,
    NavbarComponent,
    ProfileComponent,
    SidebarComponent,
    FamilyTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
