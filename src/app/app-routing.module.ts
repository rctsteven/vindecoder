import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VinDecoderPageComponent } from './vindecoder/pages/vin-decoder.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/vin-decoder',
    pathMatch: 'full',
  },
  {
    path: 'vin-decoder',
    component: VinDecoderPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
