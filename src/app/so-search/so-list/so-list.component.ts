import { Component, OnInit, OnDestroy } from '@angular/core';
import { SoSearchService } from 'src/app/so-search/shared/so-search.service';
import { IStackItem } from 'src/app/so-search/shared/so-search.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-so-list',
  templateUrl: './so-list.component.html',
  styleUrls: ['./so-list.component.scss']
})
export class SoListComponent implements OnInit, OnDestroy {

  searchText = '';
  items: IStackItem[];
  subscription: Subscription = new Subscription();

  constructor(private soSearchService: SoSearchService) { }

  ngOnInit() {
  }

  itemSelected(item) {
    this.soSearchService.stackSubject.next(item);
  }

  search() {
    this.subscription.add(this.soSearchService.searchText(this.searchText).subscribe(response => {
      if (response['items']) {
        this.items = response['items'].slice(0, 10).map(resItem => {
          return {
            title: resItem['title'],
            viewCount: resItem['view_count'],
            score: resItem['score'],
            link: resItem['link']
          } as IStackItem;
        });
      }       
    }));
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
