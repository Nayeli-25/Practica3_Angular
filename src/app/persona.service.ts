import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Persona } from './persona';
import { PERSONAS } from './lista-personas';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {

  constructor() { }

  getPersonas(): Observable<Persona[]> {
    return of(PERSONAS);
  }

  getPersona(id: number | string) {
    return this.getPersonas().pipe(
      map((personas: Persona[]) => personas.find(persona => persona.id === +id))
    );
  }
}

