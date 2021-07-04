import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { selectCurrentVinInfo } from '../store/vin-decoder.selectors';
import { VinSubmitted } from './vin-decoder.page.actions';

@Component({
  selector: 'app-vin-decoder-page',
  templateUrl: './vin-decoder.page.html',
  styleUrls: ['./vin-decoder.page.scss'],
})
export class VinDecoderPageComponent {
  vinControl = new FormControl('');

  currentVinInfo$ = this.store.pipe(
    select(selectCurrentVinInfo)
  );

  get submitDisabled() {
    return this.vinControl.errors;
  }

  vinSubmitClicked() {
    this.store.dispatch(VinSubmitted({ vin: this.vinControl.value }));
  }

  constructor(
    private store: Store
  ) {}
}
