import { Component } from '@angular/core';
import { ConfigService } from './config.service';
import {delay} from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bitCoin
  search = true
  constructor(private configService:ConfigService){}
  
  getBitcoin(){
    this.search = false
    this.configService.getBitcoin().delay(1000).subscribe(data => {this.bitCoin = data
      this.search = true;
       })
    
    
  }
}
