import { Component, OnInit } from '@angular/core';
import { CountryService } from './services/country.service';
import { StatesService } from './services/states.service';
import { LgaService } from "./services/lga.service";
import { TitlesService } from './services/titles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-form';
  isFilled = false;
  myStar = 'star_border';
  hello: string;
  countryList: any[] = [];
  myCountry;
  useCountryID;
  stateList: any[] = [];
  myState; 
  myStateNames: any[];
  useStateID: number;
  LGAList: any[] = [];
  myLGANames: any[] = [];
  myLGA;
  titleList: any[] = [];
  myTitle;
  myTitleID: number;


  
  // constructor(private cservice: CountryService, private stservice: StatesService,
  //   private lservice: LgaService, private tservice: TitlesService) {

  // }


  ngOnInit() {
    // // this.countryList = this.cservice.getCountryList();
    // // console.log("expected result");
    // this.cservice.getCountryList().subscribe((res) => {
    //   this.countryList = res;
    //   // console.log(res);    
    // });

    // this.stservice.getStates().subscribe((data) => {
    //   this.stateList = data;
    //   // console.warn(data);
    // });

    // this.lservice.getLgaList().subscribe((dt) => {
    //   this.LGAList = dt;
    //   // console.warn(dt);
    // }); 
    
    // this.tservice.getTitles().subscribe((dat) => {
    //   this.titleList = dat;
    //   // console.log(dat.length);
    // })

  }


  // onSelectCountry() {
    
  //   this.useCountryID = this.countryList.find(x => x.countryName === this.myCountry).countryID;
  //   // console.log(this.useCountryID);

  //   // this.countryList.find(x => x.countryName === this.myCountry).countryID !== 159 ? console.log("naija") : console.log("gotta call asap");
  //   // console.log(this.myCountry + ' - ' + this.countryList.find(x => x.countryName === this.myCountry).countryID);
  //   // console.log(this.myState + ' - ' + this.stateList.find(y => y.stateName === this.myState).stateID);
    
  //   this.myStateNames = this.stateList.filter(x => x.countryID === <number>this.useCountryID); //.map(x => x.stateName);
  //   // console.log(this.stateList.filter(x => x.countryID === <number>this.useStateID).map(x => x.stateName));
  //   // console.clear();
  //   // console.log(this.myStateNames);
  //   // console.log(this.myLGANames);
  //   this.myStateNames.length === 0 ? this.myLGANames = [] : this.myLGANames = this.myLGANames;
  //   // this.myStateNames.length === 0 ? console.log(this.myStateNames.length) : console.log(this.myLGANames.length);

  //   // this.onSelectState() //not working. supposed to call this in order to clear it
  
  // }

  // onSelectState() {

  //   this.useStateID = this.stateList.find(x => x.stateName === this.myState).stateID;
  //   // console.clear();
  //   console.warn(this.useStateID);
  //   this.myLGANames = this.LGAList.filter(x => x.lgaStateID === this.useStateID);

  // }



  

  
  movie = {
    title: "Strange Things",
    releaseDate: new Date(2016,5,13),
    gross: 26450000,
    rating: 4.54637
  }

  

  //controls toggling of star-clicked and unclicked
  onClick() {
    this.isFilled = !this.isFilled;
    console.log(this.myStar + " clicked");
    this.isFilled ? this.myStar = 'star' : this.myStar = 'star_border';
  }

  onKeyPress(content) {
    this.hello = content;
    console.log(content);
  }




}
