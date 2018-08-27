import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { AboutUssectionComponent } from './about-ussection/about-ussection.component';
import { WhyWesectionComponent } from './why-wesection/why-wesection.component';
import { WhatWeoffersectionComponent } from './what-weoffersection/what-weoffersection.component';
import { SampleWorksectionComponent } from './sample-worksection/sample-worksection.component';
import { CompanyFactssectionComponent } from './company-factssection/company-factssection.component';
import { TeamsectionComponent } from './teamsection/teamsection.component';
import { TestimonialsectionComponent } from './testimonialsection/testimonialsection.component';
import { PartnersectionComponent } from './partnersection/partnersection.component';
import { ContactsectionComponent } from './contactsection/contactsection.component';
import { FooterComponent } from './footer/footer.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ContactformComponent } from './contactform/contactform.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HerosectionComponent,
    AboutUssectionComponent,
    WhyWesectionComponent,
    WhatWeoffersectionComponent,
    SampleWorksectionComponent,
    CompanyFactssectionComponent,
    TeamsectionComponent,
    TestimonialsectionComponent,
    PartnersectionComponent,
    ContactsectionComponent,
    FooterComponent,
    TopNavComponent,
    ContactformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
