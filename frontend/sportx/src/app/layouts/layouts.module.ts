import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NabvarComponent } from './nabvar/nabvar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NabvarComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
  ],
  exports: [
    NabvarComponent,
  ]
})
export class LayoutsModule { }
