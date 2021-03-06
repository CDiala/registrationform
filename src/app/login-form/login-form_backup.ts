import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryService } from '../services/country.service';
import { StatesService } from '../services/states.service';
import { LgaService } from "../services/lga.service";
import { TitlesService } from '../services/titles.service';
import { StatusService } from './../services/status.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component1.html',
  styleUrls: ['./login-form.component1.css']
})




export class LoginFormComponent {
  mobNumberPattern =  "^((\\+91-?)|0)?[0-9]{11}$";   // "^(0[7-9]|\+[0-9]*)[0-9]*$"   "^(0[7-9][0-1]|\+[0-9]*)[0-9]*$"
  isValidFormSubmitted = false;  
  user = new User();
  clickCount = 1;
  imageURL;
  ret;
  empName;
  empAddy;
  countryList: any[] = [];
  myCountry;
  useCountryID;
  stateList: any[] = [];
  myState; 
  myStateNames: any[];
  cStateNames: any[];
  useStateID: number;
  LGAList: any[] = [];
  myLGANames: any[] = [];
  cLGANames: any[] = [];
  myLGA;
  titleList: any[] = [];
  myTitle;
  myTitleID: number;
  statusList: any[] = [];
  myStatus;
  myNationality = 'hello';
  cCountry;
  cState;
  oCountry;
  oState;
  oLGA;
  eCode;
  pState;
  cLGA;
  myNTitle;
  NCountry;
  NState;
  NStateNames: any[] = [];
  NLGA;
  NLGANames: any[] = [];





  constructor(private cservice: CountryService, private stservice: StatesService,
    private lservice: LgaService, private tservice: TitlesService, private sService: StatusService,
    private renderer: Renderer2
  ) { }

  // log(x) { console.log(x); }



  
  ngOnInit() {
    // this.countryList = this.cservice.getCountryList();
    // console.log("expected result");
    this.cservice.getCountryList().subscribe((res) => {
      this.countryList = res;
      // console.log(res);    
    });

    this.stservice.getStates().subscribe((data) => {
      this.stateList = data;
      // console.warn(data);
    });

    this.lservice.getLgaList().subscribe((dt) => {
      this.LGAList = dt;
      // console.warn(dt);
    }); 
    
    this.tservice.getTitles().subscribe((dat) => {
      this.titleList = dat;
      // console.log(dat.length);
    })

    this.sService.getStatus().subscribe((stat) => {
      this.statusList = stat;
    })

  }


  onSelectCountry() {
    console.clear();
    console.log(this.myCountry);
    this.useCountryID = this.countryList.find(x => x.countryName === this.myCountry).countryID;
    // console.log(this.useCountryID);

    // this.countryList.find(x => x.countryName === this.myCountry).countryID !== 159 ? console.log("naija") : console.log("gotta call asap");
    // console.log(this.myCountry + ' - ' + this.countryList.find(x => x.countryName === this.myCountry).countryID);
    // console.log(this.myState + ' - ' + this.stateList.find(y => y.stateName === this.myState).stateID);
    
    this.myStateNames = this.stateList.filter(x => x.countryID === <number>this.useCountryID); //.map(x => x.stateName);
    // console.log(this.stateList.filter(x => x.countryID === <number>this.useStateID).map(x => x.stateName));
    // console.clear();
    // console.log(this.myCountry)
    // console.log(this.myStateNames);
    // console.log(this.myLGANames);
    this.myStateNames.length === 0 ? this.myLGANames = [] : this.myLGANames = this.myLGANames;
    // this.myStateNames.length === 0 ? console.log(this.myStateNames.length) : console.log(this.myLGANames.length);

    // this.onSelectState() //not working. supposed to call this in order to clear it
  
  }

  onSelectState() {

    this.useStateID = this.stateList.find(x => x.stateName === this.myState).stateID;
    // console.clear();
    console.warn(this.useStateID);
    this.myLGANames = this.LGAList.filter(x => x.lgaStateID === this.useStateID);

  }



  onSelectCCountry() {
    console.clear();
    console.log(this.cCountry);
    this.useCountryID = this.countryList.find(x => x.countryName === this.cCountry).countryID;
 
    this.cStateNames = this.stateList.filter(x => x.countryID === <number>this.useCountryID); //.map(x => x.stateName);

    this.cStateNames.length === 0 ? this.cLGANames = [] : this.cLGANames = this.cLGANames;

  }

  onSelectCState() {
    this.useStateID = this.stateList.find(x => x.stateName === this.cState).stateID;
    // console.clear();
    console.warn(this.useStateID);
    this.cLGANames = this.LGAList.filter(x => x.lgaStateID === this.useStateID);

  }




  onSelectNCountry() {
    console.clear();
    console.log(this.NCountry);
    this.useCountryID = this.countryList.find(x => x.countryName === this.NCountry).countryID;
 
    this.NStateNames = this.stateList.filter(x => x.countryID === <number>this.useCountryID); //.map(x => x.stateName);

    this.NStateNames.length === 0 ? this.NLGANames = [] : this.NLGANames = this.NLGANames;

  }

  onSelectNState() {
    this.useStateID = this.stateList.find(x => x.stateName === this.NState).stateID;
    // console.clear();
    console.warn(this.useStateID);
    this.NLGANames = this.LGAList.filter(x => x.lgaStateID === this.useStateID);

  }



  public isClientMinor(): boolean {

    const today = new Date();
    const birthdate = new Date((<HTMLInputElement>document.getElementById('dob')).value);
    let birthdayLength = (<HTMLInputElement>document.getElementById('dob')).value.length;
    let age = today.getFullYear() - birthdate.getFullYear();
    const m = today.getMonth() - birthdate.getMonth();
    const day = today.getDate() - birthdate.getDate();
    // console.log(age + ', ' + m + ', ' + day);
    if ((age > 18) || (age == 18 && m > 0) || (age == 18 && m == 0 && day >= 0)) {
      // alert("client is qualified");
      this.renderer.removeClass(document.getElementById('dob'),'ng-invalid');
      this.renderer.addClass(document.getElementById('dob'),'ng-valid');
      console.log(age + ' : ' + (<HTMLInputElement>document.getElementById('dob')).value.length);
      return false;
    }
    else {
      // alert("client is a minor");
      this.renderer.removeClass(document.getElementById('dob'),'ng-valid');
      this.renderer.addClass(document.getElementById('dob'),'ng-invalid');
      console.log(age + ' : ' + (<HTMLInputElement>document.getElementById('dob')).value.length);
      return true;
    }



  }


  public isRetirementAgeValid(): boolean {
    this.ret = (<HTMLInputElement>document.getElementById('ret')).value;
    if (this.ret >= 50) {
      document.getElementById('ret').classList.replace('ng-invalid','ng-valid');
      // this.renderer.removeClass(document.getElementById('ret'),'ng-invalid');
      // this.renderer.addClass(document.getElementById('ret'),'ng-valid');
      return true;
    }
    else {
      document.getElementById('ret').classList.replace('ng-valid','ng-invalid');
      // this.renderer.removeClass(document.getElementById('ret'),'ng-valid');
      // this.renderer.addClass(document.getElementById('ret'),'ng-invalid');
      return false;
    }
  }
  

  onSubFormSubmit(f1) {
    if (f1.valid) {
      console.clear();
      console.log(f1.valid);
      console.log(f1);
      console.log("this is true");
      return true;
    } 
    else {
      console.clear();
      console.log(f1.valid);
      console.log(f1);
      console.log("this is false");
      return false;
    }
  }

    
  onclickFinal(str: NgForm) {
    console.log("hello wor;d" + str.value);
  }


  onFormSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.invalid) {
      console.log("can't see sh**");
      return;
    }
    this.isValidFormSubmitted = true;
    console.log(form.value);
    // console.log();
    // console.log("success");
    // alert("form completed successfully.");
    // form.resetForm();
  }

  onFormReset(form: NgForm) {
    form.resetForm();
    // alert("form reset successful!");
    //take me back to step 1
    this.realignFormSteps();
    // console.log("success");
  }


  realignFormSteps() {
    document.getElementsByClassName('div_1').item(0).classList.replace('no-display', 'display');
    // console.log(document.getElementsByClassName('div_2').item(0).classList.replace('no-display', 'display'));
    document.getElementsByClassName('div_3').item(0).classList.replace('display', 'no-display');
    this.renderer.setStyle(document.getElementById('nxt_1'), 'display', 'none'); 
    this.renderer.setStyle(document.getElementById('nxt_2'), 'display', 'none'); 
    this.clickCount = 1;
    // this.renderer.setStyle(document.getElementById('div_1'), 'display', 'inline');
    // this.renderer.setStyle(document.getElementById('div_2'), 'display', 'inline');
    // this.renderer.setStyle(document.getElementById('div_3'), 'display', 'inline');
  }



 
  onClickNext() {
    // var fId = 'div_' + (this.clickCount + 1);
    // var gId = 'div_' + (this.clickCount);
    // console.log(fId + ' ' + gId);
    // try {
    //   var fClass = document.getElementById(fId);
    //   var gClass = document.getElementById(gId);
    //   this.renderer.setStyle(fClass, 'display', 'inline');
    //   this.renderer.setStyle(gClass, 'display', 'none');
    // }
    // catch (error) {
    //   console.log(error.message);
    // }
    // this.onFormSubmit(document.getElementsByClassName("Form" + this.clickCount.toString));
    this.clickCount = this.clickCount + 1;
    // console.log(this.clickCount);

    var rnCls = document.getElementsByClassName("div_" + this.clickCount.toString());
    var rpCls = document.getElementsByClassName("div_" + (this.clickCount - 1).toString());
    // console.log(rpCls)
    // console.log(rnCls)

    rpCls.item(0).classList.replace("display", "no-display");
    rnCls.item(0).classList.replace("no-display", "display");
    window.scrollTo(0,0);

  }

  log(str: string) {
    console.log(str);
  }

  
  logIt() {
    console.log(this.empName);
  }


  onClickPrev() {
    // var fId = 'div_' + (this.clickCount);
    // var gId = 'div_' + (this.clickCount + 1);
    // // console.log(fId + ', gid= ' + gId);

    // try {
    //   var fClass = document.getElementById(fId);
    //   var gClass = document.getElementById(gId);
    //   this.renderer.setStyle(fClass, 'display', 'inline');
    //   this.renderer.setStyle(gClass, 'display', 'none');
    // }
    // catch (error) {
    //   console.log(error.message);
    // }
    this.clickCount = this.clickCount - 1;
    // console.log(this.clickCount);

    var rnCls = document.getElementsByClassName("div_" + this.clickCount.toString());
    var rpCls = document.getElementsByClassName("div_" + (this.clickCount + 1).toString());
    // console.log(rpCls)
    // console.log(rnCls)

    rpCls.item(0).classList.replace("display", "no-display");
    rnCls.item(0).classList.replace("no-display", "display");
    window.scrollTo(0,0);

  }

  showText() {
    // console.log("try again");
    
    var eId = 'nxt_' + this.clickCount;
    // console.log(eId);
    try {   
      var errDiv = document.getElementById(eId);
      // console.log(errDiv.textContent);
      // this.renderer.setStyle(errDiv, 'display', 'inline');    
      this.renderer.setProperty(errDiv, 'textContent', 'Some fields are blank / invalid.');
      errDiv.classList.replace("errDisplay", "errDisplay_");
      // console.log(errDiv.item(0).classList);
      // errDiv.item(0).textContent = "Some fields are blank / invalid.";
      // errDiv.item(0).classList.replace("errDisplay", "errDisplay_");
      // alert(" i'm lost.");
    }
    catch (error) {
      // console.log(" : can't find this.");
      // console.log(error.message);
      
      // let errDiv = document.getElementsByClassName("errDisplay_");
      // console.log(errDiv.item(0).classList);
      // errDiv.item(0).textContent = "Some fields are blank / invalid.";
      // errDiv.item(0).classList.replace("errDisplay_", "errDisplay");
      // alert("changed");
    }
    // finally {
    //   let errDiv = document.getElementsByClassName("errDisplay_");
    //   console.log(errDiv.item(0).classList);
    //   errDiv.item(0).textContent = "the page has an error.";
    //   errDiv.item(0).classList.replace("errDisplay_", "errDisplay");
    //   alert("changed");
    // }
  }

  errClear() {
    //do something
    var eId = 'nxt_' + (this.clickCount - 1);
    // console.log(eId);
    try {
      var errDiv = document.getElementById(eId);
      errDiv.classList.replace("errDisplay_", "errDisplay");
      // this.renderer.setStyle(errDiv, 'display', 'none'); just did this
      // console.log(errDiv.item(0).classList);
      // errDiv.item(0).textContent = "Some fields are blank / invalid.";
      // errDiv.item(0).classList.replace("errDisplay_", "errDisplay");
      // alert(" i'm lost.");
    }
    catch (error) {
      // console.log(" : can't find this.");
      // console.log(error.message);
      // let errDiv = document.getElementsByClassName("errDisplay_");
      // console.log(errDiv.item(0).classList);
      // errDiv.item(0).textContent = "Some fields are blank / invalid.";
      // errDiv.item(0).classList.replace("errDisplay_", "errDisplay");
      // alert("changed");
    }
  }


}



export class User {
  mobileNumber ?: string;
}