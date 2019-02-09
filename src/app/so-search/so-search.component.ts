import { Component, OnInit } from '@angular/core';
import { SoSearchService } from 'src/app/so-search/shared/so-search.service';

@Component({
  selector: 'app-so-search',
  templateUrl: './so-search.component.html',
  styleUrls: ['./so-search.component.scss']
})
export class SoSearchComponent implements OnInit {

  itemExists = false;
  constructor(private soSearchService: SoSearchService) { }

  ngOnInit() {
    this.soSearchService.stackSubject.subscribe((item) => {
      this.itemExists = true;
    })
  }

}
