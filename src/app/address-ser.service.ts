import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressSerService {

  constructor() { }

  addressData(){
    return{
      addres:"delhi india"
    }
  }
}
