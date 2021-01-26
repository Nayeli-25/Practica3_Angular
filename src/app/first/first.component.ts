import { Component, OnInit } from '@angular/core';
//import { switchMap } from 'rxjs/operators';
//import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  nombre: string;

  constructor(
    //private route: ActivatedRoute
    ) {}

  ngOnInit() {
    //this.route.paramMap.pipe(
      //switchMap(params => {
       // this.nombre2 = params.get('nombre')
       // return this.nombre2
      //})
    //);
  }

}
