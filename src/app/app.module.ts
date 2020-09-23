import { MoshTutorialComponent } from './mosh-tutorial.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CaptionPipe } from './caption.pipe';
import { StatesService } from './services/states.service';
import { LgaService } from './services/lga.service';
import { CountryService } from './services/country.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    MoshTutorialComponent,
    CaptionPipe        
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    HttpClientModule
  ],
  providers: [StatesService,LgaService,CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
