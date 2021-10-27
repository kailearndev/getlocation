import { Component } from '@angular/core';
import { InMemoryDataService } from './in-memory-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private httpclinet: InMemoryDataService
   
  ) { }
  title = 'getlocation';
  
  /**
   * getmyinfo
   */
  public getmyinfo() {
    this.httpclinet.getLocation().subscribe((data: any) => {
      console.log(data);
      
    })

    
  }
}
