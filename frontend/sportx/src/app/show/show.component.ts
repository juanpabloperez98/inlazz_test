import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpParams } from '@angular/common/http';
import { PqrModel } from '../models/pqrs.models';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  loadComponent:boolean = false;
  id = ''
  pqrModel: PqrModel;

  constructor(
    private activeRoute: ActivatedRoute,
    private dataService: DataService,
  ) { 

    this.activeRoute.params.subscribe(
      (params) => {
        this.id = params.id;
      }
    );

    const body = new HttpParams()
    .set('pqr_id',this.id);

    
    this.dataService.getDataParams('pqr',body)
    .subscribe( (resp:any) => {
      var data = resp['pqr'][0];
      this.pqrModel = new PqrModel(
        data.identification,
        data.type_identification,
        data.names_customer,
        data.last_names_customer,
        data.mobile_phone,
        data.mobile,
        data.email,
        data.title,
        data.description,
        data.status
      )
      console.log(this.pqrModel);
      
      
    },
    (err) => {
      console.error(err);
    });



  }

  ngOnInit(): void {
  }

}
