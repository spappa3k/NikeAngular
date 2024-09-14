import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NikeService } from '../nike.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{
formCheckout:FormGroup;

constructor(private ns:NikeService){
  
  this.formCheckout= new FormGroup({
FirstName:new FormControl(''),
LastName:new FormControl(''),
DateOfBirth:new FormControl(''),
Gender:new FormControl(''),
Email:new FormControl(''),
PhoneNumber:new FormControl('')
  });
}
ngOnInit(): void {
  this.ns.viewBannerHearderOnOff(false);
}

OnSubmit(){
  console.log(this.formCheckout.value);
}
}
