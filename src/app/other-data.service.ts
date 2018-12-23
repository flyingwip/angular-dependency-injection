export class OtherDataService {

  items:Array<any> = [
    { id: 0, name: 'Kees de Vries', country: 'Germany'},
    { id: 1, name: 'Guus gedonder', country: 'Germany'},
    { id: 2, name: 'Al kehol', country: 'United States'}
  ];
  
  getItems() {
    return this.items;
  }

}