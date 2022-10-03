import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Pet } from '../models/pet';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    constructor (private http: HttpClient) { }

    // OBTIENE TODOS LOS USUARIOS REGISTADOS
    getUsers(): Observable<User[]> {
      return this.http.get<any[]>(environment.apiBase + '/users');
    }
    
    // OBTIENE UN USUARIO POR SU ID
    getUser(userId: string): Observable<User[]> {
      return this.http.get<any[]>(environment.apiBase + '/users/' + userId);
    }
    
    // OBTIENE TODAS LAS MASCOTAS REGISTRADAS
    getPets(): Observable<Pet[]> {
      return this.http.get<any[]>(environment.apiBase + '/pets');
    }

    // REGISTRA UN USUARIO
    newUser(newUser: User){
      return this.http.post(environment.apiBase + '/users/', newUser);
    }

    // REGISTRA UNA MASCOTA
    newPet(newPet: Pet){
      return this.http.post(environment.apiBase + '/pets/', newPet);
    }

    // ELIMINA UN USUARIO JUNTO CON SUS MASCOTAS

    // ELIMINA UNA MASCOTA
}