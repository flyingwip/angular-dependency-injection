import { Component, OnInit } from '@angular/core';
import { DataService }  from '../data.service';
import { OtherDataService }  from '../other-data.service';
import { LogDebugger } from '../log-debugger.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
  providers : [
  	DataService,
    {
      provide: LogDebugger,
      useFactory: () => {
        return new LogDebugger(true);
      }
    }
  ]
})
export class ListComponent implements OnInit {
  
  items:Array<any>;

  constructor( private dataservice : DataService, private logDebugger: LogDebugger) { }

  ngOnInit() {
  	this.logDebugger.debug('Getting items...');
  	this.items = this.dataservice.getItems();
  }

}
