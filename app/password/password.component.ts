import { Component, OnInit } from '@angular/core';
import { ValdationService } from '../valdation.service'
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  constructor(public myvar:ValdationService) { 
    //alert(1)
    console.log("====")
    console.log(this.myvar)
  }

  ngOnInit() {
  }

}
