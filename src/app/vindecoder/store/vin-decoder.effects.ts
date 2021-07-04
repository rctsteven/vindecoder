import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { DecodeVinQuery } from '../api/store/vin-decoder.api.actions';
import { VinSubmitted } from '../pages/vin-decoder.page.actions';
import { selectCurrentVin, selectCurrentVinInfo } from './vin-decoder.selectors';

@Injectable()
export class VinDecoderEffects {
  vinSubmitted$ = createEffect(() => this.actions$.pipe(
    ofType(VinSubmitted),
    withLatestFrom(
      this.store.pipe(select(selectCurrentVin)),
      this.store.pipe(select(selectCurrentVinInfo)),
    ),
    filter(([ , vin, vinInfo]) => vin !== vinInfo?.vin),
    map(([, vin, ]) => DecodeVinQuery({ vin }))
  ));

  constructor(
    private actions$: Actions,
    private store: Store
  ) {}
}
