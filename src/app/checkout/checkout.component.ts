import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { NikeService } from '../nike.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  formCheckoutPersonalInfo: FormGroup;
  formCheckoutShipping: FormGroup;
  formCheckoutPayment: FormGroup;

  NameSurnameReg: RegExp = /^[a-zA-ZàèéìòùÀÈÉÌÒÙçÇ]{3,}(?:[-\s][a-zA-ZàèéìòùÀÈÉÌÒÙçÇ]+)*$/;  /* REGEX NAME SURNAME */
  EmailReg: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  PhoneReg: RegExp = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
  AddressReg: RegExp= /^[a-zA-Z0-9 ]{4,}$/;
  CivicNReg: RegExp= /^\d+[a-zA-Z]?(?: ?\/?\d*[a-zA-Z]?)?$/;
  CapReg: RegExp= /^([A-Za-z]{1,2}\d[A-Za-z\d]? ?\d[A-Za-z]{2})$/;
  CardReg: RegExp=/(?<!\d)\d{16}(?!\d)|(?<!\d[ _-])(?<!\d)\d{4}([_ -])\d{4}(?:\1\d{4}){2}(?![_ -]?\d)/;

  cities = [
    "Birmingham", "Bradford", "Brighton", "Bristol", "Cambridge", "Coventry", "Derby",
    "Glasgow", "Hull", "Leeds", "Leicester", "Liverpool", "London", "Manchester",
    "Newcastle", "Norwich", "Nottingham", "Oxford", "Plymouth", "Portsmouth",
    "Reading", "Sheffield", "Southampton", "Stoke-on-Trent", "Sunderland",
    "Wakefield", "Wolverhampton"
  ];

  constructor(private ns: NikeService) {
    this.formCheckoutPersonalInfo = new FormGroup({
      FirstName: new FormControl('', [Validators.required, Validators.pattern(this.NameSurnameReg)]),
      LastName: new FormControl('', [Validators.required, Validators.pattern(this.NameSurnameReg)]),
      Email: new FormControl('', [Validators.required, Validators.pattern(this.EmailReg)]),
      PhoneNumber: new FormControl('', [Validators.required, Validators.pattern(this.PhoneReg)]),
      Gender: new FormControl('', [Validators.required]),
      DateOfBirth: new FormControl('', [Validators.required, CheckoutComponent.dateValidator]),
    });

    this.formCheckoutShipping = new FormGroup({
      StreetAddress: new FormControl('', [Validators.required, Validators.pattern(this.AddressReg)]),
      AdditionalAddress: new FormControl(''),
      CivicNumber: new FormControl('',[Validators.required, Validators.pattern(this.CivicNReg)]),
      City: new FormControl('',[Validators.required]),
      CAP: new FormControl('',[Validators.required, Validators.pattern(this.CapReg)]),
    });

    this.formCheckoutPayment = new FormGroup({
      CardHolderName: new FormControl('',[Validators.required, Validators.pattern(this.NameSurnameReg)]),
      CardNumber: new FormControl('', [Validators.required, Validators.pattern(this.CardReg)]),
      BillingAddress: new FormControl('', [Validators.required,Validators.pattern(this.AddressReg)]),
      CityBilling: new FormControl('', [Validators.required]),
      CardPostCode: new FormControl(''),
      MonthExpire: new FormControl(''),
      YearExpire: new FormControl(''),
      CVC: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.ns.viewBannerHearderOnOff(false);
  }

  OnSubmit() {
    console.log(this.formCheckoutPersonalInfo.value);
  }

  /* Custom Validator per la Data */
  static dateValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const regexDate = /^\d{4}-\d{2}-\d{2}$/;

    if (!value) {
      return null; // Return null if no value is provided
    }

    if (!regexDate.test(value)) {
      return { invalidDateFormat: true }; // Return error if the format is not correct
    }

    const date = new Date(value);
    const limitTooOld = new Date();
    const limitTooYoung = new Date();
    const limitFuture= new Date();

    limitTooYoung.setFullYear(limitTooYoung.getFullYear() - 5);
    limitTooOld.setFullYear(limitTooOld.getFullYear() - 100);

    if (date < limitTooOld) {
      return { dateTooEarly: true }; // Ritorna errore se la data e' piu vecchia di 100 anni dall' attuale
    }
    if (date > limitTooYoung && date<=limitFuture) {
      return { dateTooNear: true }; // Ritorna errore se la data e' piu vicina a 5 anni dalla data attuale
    }
    if(date>limitFuture){
      return { dateFuturistic: true}; // Ritorna errore se la data e' futuristica
    }

    return null; 
  }


  forceMauisc(event:any){
    const upperValue = event.target.value.toUpperCase();
    this.formCheckoutShipping.get('CAP')?.setValue(upperValue, { emitEvent: false });
  }

  logoCard(event:any){
    const valueNumber= event.target.value;
    let numberToAnalyze= valueNumber.slice(0,2);
    console.log(numberToAnalyze);
  }
}
