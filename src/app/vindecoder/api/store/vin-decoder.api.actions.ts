import { createAction, props } from '@ngrx/store';
import { VehicleInfo } from '../../models/vehicle-info.model';

const actionSource = '[VIN DECODER API]';

export const DecodeVinQuery = createAction(
  `${actionSource} DECODE VIN QUERY`,
  props<{
    vin: string,
  }>()
);

export const DecodeVinSuccess = createAction(
  `${actionSource} DECODE VIN SUCCESS`,
  props<{
    vehicleInfo: VehicleInfo,
  }>()
);

export const DecodeVinFailure = createAction(
  `${actionSource} DECODE VIN FAILURE`
);
