import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROOT } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VinDecoderService {
  constructor(
    private http: HttpClient
  ) {}

  public DecodeVin(vin: string) {
    return this.http.get(`${API_ROOT}/vehicles/decodevinvalues/${vin}?format=json`);
  }
}
