import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
    
  url = 'assets/json/db.json';
  locations : HousingLocation[] = [];

  constructor() { }

  async getAllHousingLocations() : Promise<HousingLocation[]> {
       const data = await fetch(this.url);
       const res = await data.json()
       this.locations= res?.locations ?? [];
        return this.locations;
  }

  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
     if (this.locations.length === 0){
         await this.getAllHousingLocations();
     } 
     return this.locations.find(location => location?.id === id)
  }

  submitApplication(firstName: string, lastName: string, email: string){
    console.log(firstName, lastName, email);
  }
}
