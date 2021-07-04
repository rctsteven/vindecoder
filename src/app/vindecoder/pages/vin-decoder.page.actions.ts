import { createAction, props } from '@ngrx/store';

const actionSource = '[VIN DECODER PAGE]';

export const VinSubmitted = createAction(
  `${actionSource} VIN SUBMITTED`,
  props<{
    vin: string,
  }>()
);
