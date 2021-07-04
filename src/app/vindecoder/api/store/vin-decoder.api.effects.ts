import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { VinDecoderService } from '../services/vin-decoder.service';
import { mapResponseToVehicleInfo } from '../utils/vin-decoder.mapper';
import { DecodeVinFailure, DecodeVinQuery, DecodeVinSuccess } from './vin-decoder.api.actions';

@Injectable()
export class VinDecoderApiEffects {
  constructor(
    private actions$: Actions,
    private vinDecoderService: VinDecoderService,
  ) {}

  onDecodeVinQuery$ = createEffect(() => this.actions$.pipe(
    ofType(DecodeVinQuery),
    mergeMap(request => this.vinDecoderService.DecodeVin(request.vin)
    .pipe(
      map((response) => mapResponseToVehicleInfo(response)),
      map((vehicleInfo) => DecodeVinSuccess({ vehicleInfo })),
      catchError(() => of(DecodeVinFailure()))
    ))
  ));
}
