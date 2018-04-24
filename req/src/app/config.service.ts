import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/delay'
const bit_url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
@Injectable()
export class ConfigService {

  constructor(
    private http: HttpClient
  ) { }
  getBitcoin() {
    return this.http.get(bit_url);
  }
}
