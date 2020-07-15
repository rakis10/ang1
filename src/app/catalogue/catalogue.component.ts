import { Component, OnInit, HostListener } from '@angular/core';
import { PhoneService } from '../phone.service';
import { Phone } from '../phones';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  phones : Array<Phone>
  constructor(phone : PhoneService,
      private shoppingService : ShoppingService
    ) {
      this.phones= new Array<Phone>()
      phone.init()
      this.phones = phone.getPhones()
      console.log(this.phones.length);
   }

  ngOnInit() {
    
  }
  //@HostListener('click')
  click(id : number){
    this.shoppingService.addToCart(id)
  }
}
