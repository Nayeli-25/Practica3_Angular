import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import {PersonaService} from '../persona.service';
import { Persona } from '../persona';

@Component({
  selector: 'app-persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.css']
})

export class PersonaDetailComponent implements OnInit {

  persona$: Observable<Persona>;
  show: boolean = true;
  texto: string =  "Ocultar detalles";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PersonaService
    ) {}

   ngOnInit() {
     this.persona$ = this.route.paramMap.pipe(
       switchMap((params: ParamMap) =>
        this.service.getPersona(params.get('id')))
        );
     }
     backPersonas(persona: Persona) {
      const personaId = persona ? persona.id : null;
      this.router.navigate(['/personas', { id: personaId, foo: 'foo' }]);
    }

    cambiaEstado() {
      this.texto = (this.show) ?  "Ver detalles":"Ocultar detalles";
      this.show = !this.show; 
    }
}
