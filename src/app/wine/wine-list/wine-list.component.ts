import { Component, OnInit, Input } from '@angular/core';

import { WineService } from '../services/wine.service';
import { Wine } from '../model/wine.model';

@Component({
	selector: 'wc-wine-list',
	templateUrl: './wine-list.component.html',
	styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {
  wineList :Wine[];
  wineCount: number;
  private params = {
    sort: '',
    sortDirection: '',
    page: 1,
    pageSize: 5,
    filter: {
      name: ''
    }
  };
  

	constructor(private wineService :WineService) { }

	ngOnInit() { 
    this.refreshList();
  }

  searchByName(searchString: string){
    this.params.filter.name = searchString;
    this.refreshList();
  }

  changeSort(criteria: string){
    if(this.params.sort == criteria){
      if(this.params.sortDirection == 'desc'){
        this.params.sortDirection = '';
      }else{
        this.params.sortDirection = 'desc';
      }
    }else{
      this.params.sort = criteria;
      this.params.sortDirection = '';
    }
    this.refreshList();
  }

  refreshList(){
    this.wineService.getAll(this.params).subscribe(
      data => {
        this.wineList = data.wines;
        this.wineCount = data.count;
      },
      error => {
        console.log('Erroooooorrr', error.statusText);
      }
    );
  }

	changePage(newPage :number){
    // console.log("[WineListComponent] New pagination page: ", newPage);
    this.params.page = newPage;
    this.refreshList();
	}
}
