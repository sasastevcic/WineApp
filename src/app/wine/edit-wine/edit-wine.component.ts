import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { WineService } from '../services/wine.service';
import { Wine } from '../model/wine.model';

@Component({
  selector: 'wc-edit-wine',
  templateUrl: './edit-wine.component.html',
  styleUrls: ['./edit-wine.component.css']
})
export class EditWineComponent implements OnInit {
	wine :Wine;
	wineForm :FormGroup;

  constructor(private fb: FormBuilder, private wineService :WineService, private router :Router,
    private route :ActivatedRoute) { 
    this.createForm();
  }

  ngOnInit() {
    let id :string = this.route.snapshot.params.id;
     this.wineService.get(Number(id)).subscribe(wine => {
       this.wine = wine;
       this.wineForm.patchValue(this.wine);
     });
  }

  createForm(){
    this.wineForm = this.fb.group({
      'name': ["", [Validators.required, Validators.minLength(2)]],
      'year': ["", Validators.required],
      'grapes': ["", Validators.required],
      'country': ["", Validators.required],
      'region': ["", Validators.required],
      'description': ["", Validators.required]
    });
  }

  onSubmit(){
    let submitedWine: Wine = new Wine(this.wineForm.value);
    if(this.wine){
      submitedWine._id = this.wine._id;
      this.wineService.update(submitedWine).subscribe(wine => {
        this.wineForm.reset();
        this.router.navigate(['']);
      });
    }else{
      this.wineService.add(submitedWine).subscribe(wine => {
        submitedWine = wine;
        this.router.navigate(['']);
      });
    }
  }

}
