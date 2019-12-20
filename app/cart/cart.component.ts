import { Component, OnInit } from '@angular/core';
import { ValdationService } from '../valdation.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  public myData = [
    {name:"product1" , price:1000 , brandName:"Puma"},
    {name:"product3" , price:2000 , brandName:"Nike"},
    {name:"product2" , price:3000 , brandName:"Killer Jeans"},
  ]

  public myData1:any;
  constructor(public myvar:ValdationService) {
    // alert(1)
    console.log("======")
    console.log(this.myvar)
   }

  ngOnInit() {
    this.myvar.select().subscribe(
      (response)=>{
        console.log("yes")
        console.log(response)
        this.myData1=response
      },
      (error)=>{
        console.log("no")
        console.log(error)
      }
    )
    
  }

}
