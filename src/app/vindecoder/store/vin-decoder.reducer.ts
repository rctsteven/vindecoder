import { Action, createReducer, on } from '@ngrx/store';
import { DecodeVinSuccess } from '../api/store/vin-decoder.api.actions';
import { VinSubmitted } from '../pages/vin-decoder.page.actions';
import { initialState, State } from './vin-decoder.state';

const vinDecoderReducer = createReducer(
  initialState,

  on(VinSubmitted, (state, { vin }) => ({
    ...state,
    currentVin: vin,
  })),

  on(DecodeVinSuccess, (state, { vehicleInfo }) => ({
    ...state,
    currentVinInfo: vehicleInfo
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return vinDecoderReducer(state, action);
}
