import { Component, OnInit } from '@angular/core';
import { IStackItem } from 'src/app/so-search/shared/so-search.model';
import { SoSearchService } from 'src/app/so-search/shared/so-search.service';

@Component({
  selector: 'app-so-details',
  templateUrl: './so-details.component.html',
  styleUrls: ['./so-details.component.scss']
})
export class SoDetailsComponent implements OnInit {

  selectedItem: IStackItem;

  constructor(private soSearchService: SoSearchService) { }
 
  ngOnInit() {
    this.soSearchService.stackSubject.subscribe((item: IStackItem) => {
      this.selectedItem = item;
    });
  }

}
