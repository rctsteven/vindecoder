import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, vinDecoderFeatureKey } from './vin-decoder.state';

export const selectVinDecoderState = createFeatureSelector<State>(vinDecoderFeatureKey);

export const selectCurrentVin = createSelector(
  selectVinDecoderState,
  state => state.currentVin
);

export const selectCurrentVinInfo = createSelector(
  selectVinDecoderState,
  state => state.currentVinInfo
);
