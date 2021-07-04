import { VehicleInfo } from '../models/vehicle-info.model';

export const vinDecoderFeatureKey = 'vinDecoder';

export interface State {
  currentVin: string;
  currentVinInfo: VehicleInfo | null;
}

export const initialState: State = {
  currentVin: '',
  currentVinInfo: null,
};
