import { Injectable, EventEmitter, Output } from '@angular/core';
import { Phone } from './phones';
import { PhoneService } from './phone.service';
//https://stackblitz.com/edit/angular-communication-3?file=app%2Fside-bar%2Fside-bar.service.ts
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  cart : Array<number>

  @Output() change: EventEmitter<Array<number>> = new EventEmitter();
  constructor(phone : PhoneService){
    this.cart =  new Array<number>()
  }

  public addToCart(id : number){
    console.log("pridavam do cartu")
    this.cart.push(id)
    this.change.emit(this.cart)
  }
  remove(id : number){
    // remove na array je splice
    this.cart.splice( this.cart.indexOf(id), 1 )
    this.change.emit(this.cart)
  }
}
