import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pet } from 'src/app/models/pet';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  styleUrls: ['./add-pets.component.scss']
})
export class AddPetsComponent implements OnInit {

  usersCollection: any = [];

  constructor(
    private api: ApiService, 
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar) {
      this.api.getUsers().subscribe((res: any) => {
        this.usersCollection = res.users
      })
      
    }
  
  petForm: FormGroup = this.formBuilder.group({
    name: new FormControl('', [ Validators.required ]),
    type: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    race: new FormControl('', [Validators.required]),
    owner: new FormControl('', [Validators.required]),
  });


  ngOnInit(): void {
  }

  onSubmit() {
    const name: string = this.petForm.controls['name'].value
    const type: string = this.petForm.controls['type'].value
    const age: number = this.petForm.controls['age'].value
    const race: string = this.petForm.controls['race'].value
    const owner: string = this.petForm.controls['owner'].value
    
    const pet: Pet = { name, owner, age, race, type }
    if(name && type && age && race && owner){
      this.api.newPet(pet).subscribe()
      
      this.petForm.reset();  
      Object.keys(this.petForm.controls).forEach(key =>{
        this.petForm.controls[key].setErrors(null)
      });
     
      this._snackBar.open("Pet registered succesfully", "close");
    }
  }

}
