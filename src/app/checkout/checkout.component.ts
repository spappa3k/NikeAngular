import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
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
  MonthReg: RegExp=/^(0[1-9]|1[0-2]|[1-9])$/;
  CVCReg: RegExp = /^\d{3}$/;



  typeOfCard:string=""
  errorExpiringDate=false;
  buttonDisabled=true

  cards: string[] = [
    "/assets/Img/cardIcons/visa.png",
    "/assets/Img/cardIcons/mastercard.png",
    "/assets/Img/cardIcons/americanexpress.png",
    "/assets/Img/cardIcons/maestro.png",
    "/assets/Img/cardIcons/empty.png",
  ];


  cities = [
    "Birmingham", "Bradford", "Brighton", "Bristol", "Cambridge", "Coventry", "Derby",
    "Glasgow", "Hull", "Leeds", "Leicester", "Liverpool", "London", "Manchester",
    "Newcastle", "Norwich", "Nottingham", "Oxford", "Plymouth", "Portsmouth",
    "Reading", "Sheffield", "Southampton", "Stoke-on-Trent", "Sunderland",
    "Wakefield", "Wolverhampton"
  ];

  constructor(private ns: NikeService, private fb:FormBuilder) {
 
    this.formCheckoutPersonalInfo = fb.group({
      FirstName: new FormControl('', [Validators.required, Validators.pattern(this.NameSurnameReg)]),
      LastName: new FormControl('', [Validators.required, Validators.pattern(this.NameSurnameReg)]),
      Email: new FormControl('', [Validators.required, Validators.pattern(this.EmailReg)]),
      PhoneNumber: new FormControl('', [Validators.required, Validators.pattern(this.PhoneReg)]),
      Gender: new FormControl('', [Validators.required]),
      DateOfBirth: new FormControl('', [Validators.required, CheckoutComponent.dateValidator]),
    }),

    this.formCheckoutShipping = fb.group({
      StreetAddress: new FormControl('', [Validators.required, Validators.pattern(this.AddressReg)]),
      AdditionalAddress: new FormControl(''),
      CivicNumber: new FormControl('',[Validators.required, Validators.pattern(this.CivicNReg)]),
      City: new FormControl('',[Validators.required]),
      CAP: new FormControl('',[Validators.required, Validators.pattern(this.CapReg)]),
    })

    this.formCheckoutPayment = fb.group({
      CardHolderName: new FormControl('',[Validators.required, Validators.pattern(this.NameSurnameReg)]),
      CardNumber: new FormControl('', [Validators.required, Validators.pattern(this.CardReg)]),
      BillingAddress: new FormControl('', [Validators.required,Validators.pattern(this.AddressReg)]),
      CityBilling: new FormControl('', [Validators.required]),
      CardPostCode: new FormControl('',[Validators.required,Validators.pattern(this.CapReg)]),
      MonthExpire: new FormControl('',[Validators.required,Validators.pattern(this.MonthReg)]),
      YearExpire: new FormControl('',[Validators.required,CheckoutComponent.getLastTwoDigitsOfCurrentYear]),
      CVC: new FormControl('',[Validators.required,Validators.pattern(this.CVCReg)]),
    });
  }
  

  ngOnInit(): void {
    this.ns.viewBannerHearderOnOff(false);
  }

  onSubmit() {
    if (this.formCheckoutPersonalInfo.valid && this.formCheckoutShipping.valid && this.formCheckoutPayment.valid) {
      // Se tutti i form sono validi, invia i dati o esegui altre azioni
      console.log('Form Personal Value:', this.formCheckoutPersonalInfo.value);
      console.log('Form Shipping Value:', this.formCheckoutShipping.value);
      console.log('Form Payment Value:', this.formCheckoutPayment.value);
      alert('Tutti i form sono validi!');
    } else {
      // Se uno dei form non è valido, segnala gli errori
      this.formCheckoutPersonalInfo.markAllAsTouched();
      this.formCheckoutShipping.markAllAsTouched();
      this.formCheckoutPayment.markAllAsTouched();
      alert('Uno o più form non sono validi.');
    }
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


  forceMauisc(event:any){  /* Forziamo l'input del cap ad uppercase */
    const upperValue = event.target.value.toUpperCase();
    this.formCheckoutShipping.get('CAP')?.setValue(upperValue, { emitEvent: false });
  }

  logoCard(event:any){  /* analizziamo i primi due numeri della carta per riconoscerne il tipo */
    const valueNumber= event.target.value;
    const currentFirstTwoNumbers = valueNumber.slice(0, 2);
    console.log(currentFirstTwoNumbers);
    
    if(currentFirstTwoNumbers>=40 && currentFirstTwoNumbers<=49){
      this.typeOfCard="Visa";
    }
    else if(currentFirstTwoNumbers>=51 && currentFirstTwoNumbers<=55){
      this.typeOfCard="MasterCard";
    }
    else if(currentFirstTwoNumbers==34 || currentFirstTwoNumbers==37){
      this.typeOfCard="AmericanExpress";
    }
    else if(currentFirstTwoNumbers>=60 && currentFirstTwoNumbers<=69 || currentFirstTwoNumbers==50 || currentFirstTwoNumbers>=56 && currentFirstTwoNumbers<=58){
      this.typeOfCard="Maestro";
    }else{
      this.typeOfCard="None";
    }
    /*  
Visa: 4
Mastercard: 51–55 
American Express: 34, 37
Maestro: 50, 56–58, 6 */

  }

  static getLastTwoDigitsOfCurrentYear(control: AbstractControl): ValidationErrors | null {
    // Ottieni l'anno corrente
    const currentYear = new Date().getFullYear();
    
    // Converti l'anno in una stringa
    const yearString = currentYear.toString();
    

    const lastTwoDigits = yearString.slice(-2);
    const lastTwoDigitsN: number = +lastTwoDigits;

    const value:number = control.value;
   
    if (value >= lastTwoDigitsN+10) {
      return { invalidYear: true };
    }
    else if (value<lastTwoDigitsN) {
      return { invalidYear: true };
    } else{
      return null; //Valido
    }

}

  // Funzione per determinare se mostrare l'errore
  showExpiringDateError() {
    const monthControl = this.formCheckoutPayment.get('MonthExpire');
    const yearControl = this.formCheckoutPayment.get('YearExpire');
  
    // Verifica se almeno uno dei campi è stato toccato e se uno di essi ha un errore
    return (monthControl?.touched || yearControl?.touched) &&
           (monthControl?.invalid || yearControl?.invalid);

}
}

