import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { AyudasComponent } from './pages/ayudas/ayudas.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';

const routes: Routes = [
  { path:'', component: AyudasComponent },
  { path:'users', component: ListUsersComponent },
  { path:'adduser', component: AddUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
