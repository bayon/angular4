import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [

      {id: 12, name: 'Brief', description: '9 years of Professional Experience'},
      {id: 13, name: 'Technical', description: 'PHP Javascript MySql'},
      {id: 14, name: 'Experience',description:'JPPA, Codigo, WestIPC, Indatus, Aircom' },
      {id: 15, name: 'Examples', description:'http://www.forteworks.com' },

    ];
    return {heroes};
  }
}
