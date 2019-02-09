import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoSearchComponent } from 'src/app/so-search/so-search.component';
import { SoListComponent } from './so-list/so-list.component';
import { SoDetailsComponent } from './so-details/so-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { SoSearchService } from 'src/app/so-search/shared/so-search.service';
import { ShortenPipe } from 'src/app/so-search/shared/shorten.pipe';

@NgModule({
  declarations: [
    SoSearchComponent,
    SoListComponent,
    SoDetailsComponent,
    ShortenPipe
  ],
  providers: [SoSearchService],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatInputModule
  ]
})
export class SoSearchModule { }
