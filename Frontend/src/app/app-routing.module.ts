import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPetsComponent } from './pages/add-pets/add-pets.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { AyudasComponent } from './pages/ayudas/ayudas.component';
import { HomeComponent } from './pages/home/home.component';
import { ListPetsComponent } from './pages/list-pets/list-pets.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { ViewUserComponent } from './pages/view-user/view-user.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'ayudas', component: AyudasComponent },
  { path:'users', component: ListUsersComponent },
  { path:'adduser', component: AddUserComponent },
  { path:'addpet', component: AddPetsComponent },
  { path:'pets', component: ListPetsComponent },
  { path:'user/:id', component: ViewUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
