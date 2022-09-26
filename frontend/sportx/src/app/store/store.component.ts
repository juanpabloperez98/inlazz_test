import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { Router } from "@angular/router"

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {


  loadComponent: boolean = false
  submitStore: boolean = false
  errorMsg: boolean = false

  //FORMS
  ticketForm: FormGroup;

  // GET FUNCTIONS
  get addTicketF() { return this.ticketForm.controls; }


  list_identification = []  

  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
    private router: Router
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
    this.submitStore = true;
    
    if(!this.ticketForm.valid){
      return;
    }
    console.log(this.ticketForm.get('type_identification')!.value);
    const body = {
      identification: this.ticketForm.get('identification')!.value,
      type_identification: this.ticketForm.get('type_identification')!.value,
      names_customer: this.ticketForm.get('names')!.value,
      last_names_customer: this.ticketForm.get('last_names')!.value,
      mobile_phone: this.ticketForm.get('cellphone')!.value,
      mobile: this.ticketForm.get('phone')!.value,
      email: this.ticketForm.get('email')!.value,
      title: this.ticketForm.get('title')!.value,
      description: this.ticketForm.get('description')!.value
    }
    this.dataService.postData('pqrs', body)
      .subscribe( (resp) => {
        console.log(resp);
        this.router.navigate(['/index']);
      },
      (err) => {
        console.error(err.error.message);
      }
      )
  }


}
