import { Component, OnInit } from '@angular/core';
import { DataService }  from '../data.service';
import { OtherDataService }  from '../other-data.service';
import { LogDebugger } from '../log-debugger.service';
import { ConsoleService } from '../console.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
  providers: [
    DataService,
    ConsoleService, 
    {
      provide: LogDebugger,
      useFactory: (consoleService) => {
        return new LogDebugger(consoleService, true);
      },
      deps: [ConsoleService]
    }
  ],
})
export class ListComponent implements OnInit {
  
  items:Array<any>;

  constructor( private dataservice : DataService, private logDebugger: LogDebugger) { }

  ngOnInit() {
  	this.logDebugger.debug('Getting items...');
  	this.items = this.dataservice.getItems();
  }

}
