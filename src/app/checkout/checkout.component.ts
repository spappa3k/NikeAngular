import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NikeService } from '../nike.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{
formCheckoutPersonalInfo:FormGroup;
formCheckoutShipping:FormGroup;
formCheckoutPayment:FormGroup;
NameSurnameReg:RegExp=/^[a-zA-ZàèéìòùÀÈÉÌÒÙçÇ]{3,}(?:[-\s][a-zA-ZàèéìòùÀÈÉÌÒÙçÇ]+)*$/;

cities = [
  "Birmingham",
  "Bradford",
  "Brighton",
  "Bristol",
  "Cambridge",
  "Coventry",
  "Derby",
  "Glasgow",
  "Hull",
  "Leeds",
  "Leicester",
  "Liverpool",
  "London",
  "Manchester",
  "Newcastle",
  "Norwich",
  "Nottingham",
  "Oxford",
  "Plymouth",
  "Portsmouth",
  "Reading",
  "Sheffield",
  "Southampton",
  "Stoke-on-Trent",
  "Sunderland",
  "Wakefield",
  "Wolverhampton"
];


constructor(private ns:NikeService){

  this.formCheckoutPersonalInfo= new FormGroup({
FirstName: new FormControl('', [Validators.required, Validators.pattern(this.NameSurnameReg)]),
LastName:new FormControl('', [Validators.required, Validators.pattern(this.NameSurnameReg)]),
DateOfBirth:new FormControl(''),
Gender:new FormControl(''),
Email:new FormControl(''),
PhoneNumber:new FormControl('')
  });

  this.formCheckoutShipping= new FormGroup({
    StreetAddress:new FormControl(''),
    AdditionalAddress:new FormControl(''),
    CivicNumber:new FormControl(''),
    City:new FormControl(''),
    CAP:new FormControl(''),
      });

      this.formCheckoutPayment= new FormGroup({
        CardNumber:new FormControl(''),
        BillingAddress:new FormControl(''),
        CityBilling:new FormControl(''),
        CardPostCode:new FormControl(''),
        MonthExpire:new FormControl(''),
        YearExpire:new FormControl(''),
        CVC:new FormControl(''),
        
          });
}
ngOnInit(): void {
  this.ns.viewBannerHearderOnOff(false);
}

OnSubmit(){
  console.log(this.formCheckoutPersonalInfo.value);
}
}
