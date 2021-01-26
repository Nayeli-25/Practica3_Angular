import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Persona } from '../persona';

@Injectable({
  providedIn: 'root'
})
export class CheckEdadGuard implements CanActivate {
  persona: Persona[]

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const edad = 20
      //const edad =  this.persona.find(persona => persona.edad === +edad)
      if (edad >= 18){
        return true
      }
      return false
  }
  //getEdad(edad: number) {
    //7this.persona.find(persona => persona.edad === +edad)
    //return edad
  //}
  
}
