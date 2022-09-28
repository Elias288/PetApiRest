import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})

export class ListUsersComponent implements OnInit{
  displayedColumns: string[] = ['name', 'surName', 'age', 'city', 'nOfPets', 'actions'];
  dataSource: any = [];

  constructor(private api: ApiService){}

  ngOnInit(){
    this.api.getUsers().subscribe(element => {
      const data: any = element
      console.log(data.users);
      
      this.dataSource = new MatTableDataSource(data.users);
    })
  }

}
