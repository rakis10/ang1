import { Injectable } from '@angular/core';
import { Phone }  from './phones'
@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  
  t: Phone
  phones : Array<Phone>
  public init() {

    this.phones = new Array<Phone>()
     this.phones.push(new Phone(1,"iPhone", 700))
    this.phones.push( new Phone(2,'iPhone x', 800))
    
  }
  constructor() { 
    
  }

  ngOnInit(){
    
  

  }
  public getPhones(){
    return this.phones
  }
}
