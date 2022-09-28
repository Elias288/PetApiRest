import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.scss']
})
export class ListPetsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'type', 'race', 'age', 'owner', 'actions'];
  dataSource: any = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getPets().subscribe(element => {
      const data: any = element
      this.dataSource = new MatTableDataSource(data.pets);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
