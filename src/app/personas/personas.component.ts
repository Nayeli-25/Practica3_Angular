import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {PersonaService} from '../persona.service';
import { Persona } from '../persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas$: Observable<Persona[]>;
  selectedId: number;

  constructor(
    private service: PersonaService,
    private route: ActivatedRoute
    ) {}
   
   ngOnInit() {
    this.personas$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getPersonas();
      })
     );
   }
}
