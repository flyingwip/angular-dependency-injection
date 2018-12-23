import { Component, OnInit } from '@angular/core';
import { DataService }  from '../data.service';
import { OtherDataService }  from '../other-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
  providers : [
  {provide:DataService, useClass:OtherDataService}
  ]
})
export class ListComponent implements OnInit {
  
  items:Array<any>;

  constructor( private dataservice : DataService) { }

  ngOnInit() {

  	this.items = this.dataservice.getItems();
  }

}
