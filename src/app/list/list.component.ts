import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  
  items:Array<any>;

  constructor() { }

  ngOnInit() {

  	items:Array<any> = [
	    { id: 0, name: 'Pascal Precht', country: 'Germany'},
	    { id: 1, name: 'Christoph Burgdorf', country: 'Germany'},
	    { id: 2, name: 'Thomas Burleson', country: 'United States'}
	  ]
  }

}
