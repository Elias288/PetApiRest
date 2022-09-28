import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  constructor(
    private api: ApiService, 
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar) { }
  
  userForm: FormGroup = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required])
  });

  ngOnInit() {
  }

  onSubmit() {
    const name: string = this.userForm.controls['name'].value
    const surname: string = this.userForm.controls['surname'].value
    const age: number = this.userForm.controls['age'].value
    const city: string = this.userForm.controls['city'].value
    
    const user: User = { name, surname, age, city }
    if(name && surname && age && city){
      this.api.newUser(user).subscribe()
      
      this.userForm.reset();  
      Object.keys(this.userForm.controls).forEach(key =>{
        this.userForm.controls[key].setErrors(null)
      });
     
      this._snackBar.open("User registered succesfully", "close");
    }
  }

}
