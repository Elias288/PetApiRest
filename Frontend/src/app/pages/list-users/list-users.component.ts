import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})

export class ListUsersComponent implements OnInit{
  displayedColumns: string[] = ['name', 'surName', 'age', 'city', 'nOfPets', 'actions'];
  dataSource: any = [];

  constructor(
    private api: ApiService,
    private router: Router,){}

  ngOnInit(){
    this.api.getUsers().subscribe(element => {
      const data: any = element
      
      this.dataSource = new MatTableDataSource(data.users);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  verUsuario(userId: string){
    this.router.navigate(['user', userId])
  }
}
