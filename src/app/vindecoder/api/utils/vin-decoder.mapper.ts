import { VehicleInfo } from '../../models/vehicle-info.model';

export function mapResponseToVehicleInfo(response): VehicleInfo {
  const {
    BodyClass,
    Doors,
    DriveType,
    EngineCylinders,
    EngineHP,
    ErrorCode,
    ErrorText,
    Make,
    Manufacturer,
    Model,
    ModelYear,
    Trim,
    VIN
  } = response.Results[0];

  const vehicleInfo: VehicleInfo = {
    bodyClass: BodyClass,
    doors: Doors,
    drive: DriveType,
    engineCylinders: EngineCylinders,
    errorMessage: ErrorText,
    hasError: !ErrorCode.startsWith('0'),
    horsePower: EngineHP,
    make: Make,
    manufacturer: Manufacturer,
    model: Model,
    trim: Trim,
    vin: VIN,
    year: ModelYear,
  };

  return vehicleInfo;
}
