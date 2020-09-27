import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import { MovieInformationsComponent } from './components/movie-informations/movie-informations.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'movie/add', component: MovieAddComponent },
  { path: 'movie/:id', component: MovieInformationsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
