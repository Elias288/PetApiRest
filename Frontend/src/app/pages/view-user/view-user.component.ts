import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  displayedColumns: string[]
  userId: string;
  user: any;

  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.user = { name: '', surname: '', age: 0, city: '', pets: [] }
    this.userId = ''
    this.displayedColumns = ['Name', 'Type', 'Race', 'Age'];
    this.route.params.subscribe(params => {
      this.userId = params['id']
    })
  }

  ngOnInit(): void {
    this.api.getUser(this.userId)
    .subscribe((element: any) => {
      this.user = {
        name: element.name,
        age: element.age,
        surname: element.surname,
        city: element.city,
        pets: element.pets,
      }
      console.log(this.user);
      
    })
  }

}
