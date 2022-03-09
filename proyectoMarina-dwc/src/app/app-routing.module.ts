import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GhibliComponent } from './ghibli/ghibli.component'
import { HomeComponent } from './home/home.component'
import {FormComponent} from './form/form.component'

const routes: Routes = [

  {path: 'ghibli', component: GhibliComponent},
  {path: 'ghibli/:id', component: GhibliComponent},
  {path: 'home', component: HomeComponent},
  {path: 'form', component: FormComponent},

  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
