import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {
    path:'index',
    component:IndexComponent,
  },
  {
    path:'store',
    component:StoreComponent,
  },
  {
    path:'show/:id',
    component:ShowComponent,
  },
  {
    path: '**',
    redirectTo: '/index',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
