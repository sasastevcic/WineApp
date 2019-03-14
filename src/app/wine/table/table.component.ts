import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { WineService } from '../services/wine.service';
import { Wine } from '../model/wine.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'wc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
	@Input() private wines :Wine[];
  @Output() private deleted: EventEmitter<number> = new EventEmitter();
  @Output() private onSort: EventEmitter<string> = new EventEmitter();

  	constructor(private wineService :WineService, private router :Router) {}

  	ngOnInit() {}

  	onDelete(id :number){
      this.wineService.remove(id).subscribe(wine => {
        this.deleted.emit(wine._id);
      });
    }

    onChangeSort(criteria: string){
      this.onSort.emit(criteria);
    }

    onEditWine(id :number) :void{
      this.router.navigate(['wines/', id]);
    }
}