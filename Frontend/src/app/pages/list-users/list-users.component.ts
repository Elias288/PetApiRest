import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';
import { MatTableDataSource } from '@angular/material/table';

const User_data: User[] = [
  { name: 'Elias', surName: 'Bianchi' },
  { name: 'Matias', surName: 'Souza' },
  { name: 'Joaco', surName: 'Maidana' },
]

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})

export class ListUsersComponent implements OnInit{
  displayedColumns: string[] = ['name', 'surName'];
  dataSource: any = [];

  constructor(private api: ApiService){}

  ngOnInit(){
    this.api.getUsers().subscribe(element => {
      const data: any = element
      this.dataSource = new MatTableDataSource(data.users);
    })
  }

}
