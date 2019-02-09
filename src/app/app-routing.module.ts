import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SoSearchComponent } from 'src/app/so-search/so-search.component';

const routes: Routes = [
  { path: 'so-search', component: SoSearchComponent },
  { path: '**', redirectTo: '/so-search', pathMatch: 'full' },
  { path: '', redirectTo: '/so-search', pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule ],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
