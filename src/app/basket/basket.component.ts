import { Component, OnInit, HostBinding } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  
  @HostBinding('class.cart')
  cart : Array<number>
  
  constructor(private shoppingservice : ShoppingService) {
    this.cart= new Array<number>()
   }

  ngOnInit() {
    this.shoppingservice.change.subscribe( cart => {
      console.log("emit");
      this.cart  = cart
    })
  }

}
