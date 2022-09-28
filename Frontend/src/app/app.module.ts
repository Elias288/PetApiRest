import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { AyudasComponent } from './pages/ayudas/ayudas.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListPetsComponent } from './pages/list-pets/list-pets.component';
import { AddPetsComponent } from './pages/add-pets/add-pets.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    AyudasComponent,
    ListUsersComponent,
    NavbarComponent,
    HomeComponent,
    ListPetsComponent,
    AddPetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
