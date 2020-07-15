import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = ''
  password = ''

  check(){
   if (name == this.password){
      // hide component open catalogue
      this.router.navigate(['catalogue'],);
   }else{
    
   }
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
