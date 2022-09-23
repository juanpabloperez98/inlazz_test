import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { PqrModel }  from '../models/pqrs.models';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  loadComponent: boolean = false
  pqr_model: PqrModel[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getData('pqrs')
      .subscribe( (response:any) => {
        var data = response['pqrs'];
        data.map( (item:any) => {
          var pqr = new PqrModel(
            item.identification,
            item.type_identification,
            item.names_customer,
            item.last_names_customer,
            item.mobile_phone,
            item.mobile,
            item.email,
            item.title,
            item.description,
            item.status
          )
          this.pqr_model.push(pqr)
          console.log(this.pqr_model);
          
          this.loadComponent = true;
        })
      },
      (err) => {
        console.log("error");
      }
    )
  }

}
