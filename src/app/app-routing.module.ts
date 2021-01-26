import { NgModule } from '@angular/core';
import { Routes, RouterModule, GuardsCheckEnd } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PersonasComponent} from './personas/personas.component';
import { PersonaDetailComponent} from './persona-detail/persona-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CheckEdadGuard } from './Guards/check-edad.guard';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent},
  { path: 'second-component', component: SecondComponent },
  { path: 'personas', component: PersonasComponent },
  { path: 'persona/:id', component: PersonaDetailComponent, canActivate: [CheckEdadGuard] },
  { path: '',   redirectTo: '/personas', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
