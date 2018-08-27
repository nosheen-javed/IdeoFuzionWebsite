import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosectionComponent } from './herosection/herosection.component';
import { AboutUssectionComponent } from './about-ussection/about-ussection.component';
import { WhyWesectionComponent } from './why-wesection/why-wesection.component';
import { WhatWeoffersectionComponent } from './what-weoffersection/what-weoffersection.component';
import { SampleWorksectionComponent } from './sample-worksection/sample-worksection.component';
import { TeamsectionComponent } from './teamsection/teamsection.component';
import { ContactsectionComponent } from './contactsection/contactsection.component';


const routes: Routes = [
  {
    path :'home',
    component: HerosectionComponent

  },
  {
    path :'aboutus',
    component: AboutUssectionComponent

  },
  {
    path :'whyIdeo',
    component: WhyWesectionComponent

  },
  {
    path :'services',
    component: WhatWeoffersectionComponent

  },
  {
    path :'ourwork',
    component: SampleWorksectionComponent

  },
  {
    path :'team',
    component: TeamsectionComponent

  },
  {
    path :'contact',
    component: ContactsectionComponent

  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
