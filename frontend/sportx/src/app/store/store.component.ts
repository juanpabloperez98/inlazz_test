import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  loadComponent: boolean = false

  //FORMS
  ticketForm: FormGroup;

  list_identification = []

  constructor(
    private dataService: DataService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.ticketForm = this.fb.group({
      identification: ['',[Validators.required]],
      type_identification: ['',[Validators.required]],
      names: ['',[Validators.required]],
      last_names: ['',[Validators.required]],
      cellphone: ['',[Validators.required]],
      phone: ['',[Validators.required]],
      email: ['',[Validators.required]],
      title: ['',[Validators.required]],
      description: ['',[Validators.required]],
    });
  }

  ticketSubmit(){
    if(!this.ticketForm.valid){
      return;
    }

    /* let body = new HttpParams()
        .set('identification', this.ticketForm.get('identification').value)
        .set('type_identification', this.ticketForm.get('type_identification').value)
        .set('names', this.ticketForm.get('names').value)
        .set('last_names', this.ticketForm.get('last_names').value)
        .set('cellphone', this.ticketForm.get('cellphone').value)
        .set('phone', this.ticketForm.get('phone').value)
        .set('email', this.ticketForm.get('email').value)
        .set('title', this.ticketForm.get('title').value)
        .set('description', this.ticketForm.get('description').value) */

  }

}
