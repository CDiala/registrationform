import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';
import { CountryService } from '../services/country.service';
import { StatesService } from '../services/states.service';
import { LgaService } from "../services/lga.service";
import { TitlesService } from '../services/titles.service';
import { StatusService } from './../services/status.service';
import NaijaStates from 'naija-state-local-government';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})




export class LoginFormComponent {
  // mobNumberPattern = "^(0[7-9][0-1]|\+[0-9]*)[0-9]*$" //"^((\\+91-?)|0)?[0-9]{11}$";   // "^(0[7-9]|\+[0-9]*)[0-9]*$"   "^(0[7-9][0-1]|\+[0-9]*)[0-9]*$"
  stringPattern = "^[a-zA-z]+$"
  charPattern = "^[a-zA-z0-9- /]+$"
  idPattern = "^[a-zA-z0-9-/]+$"
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
  // myTitle;
  myTitleID: number;
  statusList: any[] = [
    "Common Law",
    "Divorced",
    "Married",
    "Separated",
    "Single",
    "Unknown",
    "Widowed",
    "Numerous"
  ];
  myStatus;
  myNationality = '';
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
  oStateNames: any[] = [];
  oLGANames: any[] = [];
  NLGA;
  NLGANames: any[] = [];
  isControlDisabled: boolean;
  isCControlDisabled: boolean;
  isOControlDisabled: boolean;
  isNControlDisabled: boolean;


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
      // console.log(this.countryList);
    });

    this.stservice.getStates().subscribe((data) => {
      this.stateList = data['data'];
      // console.warn(this.stateList);
    });

    this.lservice.getLgaList().subscribe((dt) => {
      this.LGAList = dt;
      // console.warn(dt);
    });

    this.titleList = this.tservice.getTitles();
    // console.log(this.titleList);
    // this.tservice.getTitles().subscribe((dat) => {
      // this.titleList = dat;
      // console.log(dat.length);
    // })

    this.sService.getStatus().subscribe((stat) => {
      this.statusList = stat;
    })

    // console.log(NaijaStates.all());
    // console.log(NaijaStates.states());
    // console.log(NaijaStates.lgas("Oyo"))

  }


  onSelectCountry(selectedCountry) {
    // console.log(selectedCountry);

    if (selectedCountry !== 'Nigeria') {
      // console.log('false ' + selectedCountry);
      // this.myStateNames = [{
      //   Name: 'foreigner',
      //   info: [{officialName: 'foreigner'}]
      // }];
      this.myState = 'foreigner'
      this.myNationality = 'foreigner';
      this.isControlDisabled = true;
      // this.myLGANames = [];
      // console.log(this.myStateNames);
      // console.log(this.LGAList);
    }
    else {
      this.isControlDisabled = false;
      this.myNationality = 'Nigerian';
      // console.clear();
      // console.log('true' + selectedCountry);
      //the line below has been taken care by binding value property on country dropdown list to the countryID

      // this.useCountryID = this.countryList.find(x => x.countryName === selectedCountry).countryID;
      // this.useCountryID = this.countryList.find(x => x.name === selectedCountry).name;
      // console.log(this.useCountryID);

      // this.countryList.find(x => x.countryName === this.myCountry).countryID !== 159 ? console.log("naija") : console.log("gotta call asap");
      // console.log(this.myCountry + ' - ' + this.countryList.find(x => x.countryName === this.myCountry).countryID);
      // console.log(selectedCountry + ' - ' + this.stateList.find(y => y.stateName === selectedCountry).stateID);

      // this.myStateNames = this.stateList.filter(x => x.countryID === <number>this.useCountryID); //.map(x => x.stateName);
      this.myStateNames = this.stateList; //.map(x => x.stateName);
      // console.log(this.stateList.filter(x => x.countryID == selectedCountryID)); //.map(x => x.stateName));
      // console.clear();
      // console.log(this.myCountry)
      // console.log(this.myStateNames);
      // console.log(this.stateList);
      // console.log(this.myLGANames);
      // this.myStateNames.length === 0 ? this.myLGANames = [] : this.myLGANames = this.myLGANames;
      // console.log(this.myStateNames.length === 0);
      // this.myStateNames.length == 0 ? this.myLGANames == [] : this.myLGANames == this.myLGANames;
      // this.myStateNames.length === 0 ? console.log(this.myStateNames.length) : console.log(this.myLGANames.length);
      // this.myLGANames = [];
      // this.onSelectState() //not working. supposed to call this in order to clear it

    }

  }



  onSelectState(selectedState) {
    // console.log("hello " + selectedState);
    // this.useStateID = this.stateList.find(x => x.stateName === selectedState).stateID;
    // console.clear();
    // console.log(this.LGAList);
    // this.myLGANames = this.LGAList.filter(x => x.state === selectedState.lowercase);
    this.myLGANames = NaijaStates.lgas(selectedState)['lgas'];
    // this.myLGANames = this.LGAList;
    // console.log(selectedState);
    // console.log(this.myLGANames);
    // console.log(this.myLGANames['lgas']);
    // console.log(this.myLGANames['state']);
    // console.log(this.myLGANames['lgas'].item(5));

  }


  isDropdownSelected(x): boolean {
    // console.clear();
    // console.log('here: ' +x);
    if (x.value == '') {
      return false;
    }
    else {
      return true;
    }
  }



  onSelectCCountry(selectedCountry) {
    if (selectedCountry !== 'Nigeria') {
      this.cState = 'foreigner'
      // this.myNationality = 'foreigner';
      this.isCControlDisabled = true;
    }
    else {
      this.isCControlDisabled = false;
      this.cStateNames = this.stateList;
    }
  }

  onSelectCState(selectedState) {
    // this.useStateID = this.stateList.find(x => x.stateName === selectedState).stateID;
    // // console.clear();
    // console.warn(this.useStateID);
    // this.cLGANames = this.LGAList.filter(x => x.lgaStateID === this.useStateID);

    this.cLGANames = NaijaStates.lgas(selectedState)['lgas'];
    // this.myLGANames = this.LGAList;
    console.log(selectedState);
    console.log(this.cLGANames);

  }



  onSelectOCountry(selectedCountry) {
    // console.clear();
    // console.log(selectedCountry);
    // this.useCountryID = this.countryList.find(x => x.countryName === selectedCountry).countryID;

    // this.oStateNames = this.stateList.filter(x => x.countryID === <number>this.useCountryID); //.map(x => x.stateName);
    // // this.cStateNames = this.stateList.filter(x => x.countryID == selectedCountryID); //.map(x => x.stateName);

    // this.oStateNames.length === 0 ? this.oLGANames = [] : this.oLGANames = this.oLGANames;
    if (selectedCountry !== 'Nigeria') {
      this.oState = 'foreigner'
      // this.myNationality = 'foreigner';
      this.isOControlDisabled = true;
    }
    else {
      this.isOControlDisabled = false;
      this.oStateNames = this.stateList;
    }
  }

  onSelectOState(selectedState) {
    // this.useStateID = this.stateList.find(x => x.stateName === selectedState).stateID;
    // // console.clear();
    // console.warn(this.useStateID);
    // this.oLGANames = this.LGAList.filter(x => x.lgaStateID === this.useStateID);
    this.oLGANames = NaijaStates.lgas(selectedState)['lgas'];
    // this.myLGANames = this.LGAList;
    // console.log(selectedState);
    // console.log(this.oLGANames);
  }




  onSelectNCountry(NOKCountry) {
    // console.clear();
    // console.log(NOKCountry);
    // this.useCountryID = this.countryList.find(x => x.countryName === NOKCountry).countryID;

    // this.NStateNames = this.stateList.filter(x => x.countryID === <number>this.useCountryID); //.map(x => x.stateName);

    // this.NStateNames.length === 0 ? this.NLGANames = [] : this.NLGANames = this.NLGANames;
    if (NOKCountry !== 'Nigeria') {
      this.NState = 'foreigner'
      // this.myNationality = 'foreigner';
      this.isNControlDisabled = true;
    }
    else {
      this.isNControlDisabled = false;
      this.NStateNames = this.stateList;
    }
  }

  onSelectNState(NOKState) {
    // this.useStateID = this.stateList.find(x => x.stateName === NOKState).stateID;
    // // console.clear();
    // console.warn(this.useStateID);
    // this.NLGANames = this.LGAList.filter(x => x.lgaStateID === this.useStateID);


    this.NLGANames = NaijaStates.lgas(NOKState)['lgas'];
    // this.myLGANames = this.LGAList;
    // console.log(selectedState);
    // console.log(this.cLGANames);


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
      // console.log(age + ' : ' + (<HTMLInputElement>document.getElementById('dob')).value.length);
      return false;
    }
    else {
      // alert("client is a minor");
      this.renderer.removeClass(document.getElementById('dob'),'ng-valid');
      this.renderer.addClass(document.getElementById('dob'),'ng-invalid');
      // console.log(age + ' : ' + (<HTMLInputElement>document.getElementById('dob')).value.length);
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
      // console.log(f1.valid);
      // console.log(f1);
      console.log("this is true");
      return true;
    }
    else {
      console.clear();
      // console.log(f1.valid);
      // console.log(f1);
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
      console.log("Form is invalid");
      return;
    }
    this.isValidFormSubmitted = true;
    console.log(form.value);
    console.log("Form is valid");
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
    document.getElementsByClassName('div_4').item(0).classList.replace('display', 'no-display');
    this.renderer.setStyle(document.getElementById('nxt_1'), 'display', 'none');
    this.renderer.setStyle(document.getElementById('nxt_2'), 'display', 'none');
    this.renderer.setStyle(document.getElementById('nxt_3'), 'display', 'none');
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

  log(str): string {
    // console.log(str);
    // str = '';
    // console.log('after' + str);
    return str;

  }


  logit(str) {
    console.log("str equals " + str);

    for (let index = 0; index < this.myStateNames.length - 1; index++) {
      console.log(this.myStateNames[index]);

    }
  }

  logIt(a) {
    console.log(a);
  }


  logItNow(a) {
    console.log(Object.keys(a.controls).values);
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
