import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { VinDecoderApiEffects } from './api/store/vin-decoder.api.effects';
import { VinDecoderPageComponent } from './pages/vin-decoder.page';
import { VinDecoderEffects } from './store/vin-decoder.effects';
import { reducer } from './store/vin-decoder.reducer';
import { vinDecoderFeatureKey } from './store/vin-decoder.state';

@NgModule({
  declarations: [
    VinDecoderPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      vinDecoderFeatureKey,
      reducer
    ),
    EffectsModule.forFeature(
      [
        VinDecoderEffects,
        VinDecoderApiEffects
      ]
    ),
  ]
})
export class VinDecoderModule { }
