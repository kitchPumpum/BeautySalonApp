import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BookAppoinmentComponent } from './book-appoinment/book-appoinment.component';
import { AppoinmentChatComponent } from './appoinment-chat/appoinment-chat.component';
import { AppoinmentHelpComponent } from './appoinment-help/appoinment-help.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
 
  {
    path: '',
    redirectTo: '/login', 
    pathMatch: 'full'
  },

  { path: 'login', 
  component: LoginComponent 
  },
  {
    path: 'home',
    component: HomeComponent
  },
  
  {
    path: 'our-Services',
    component: OurServicesComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'book-appoinment',
    component: BookAppoinmentComponent
  },
  {
    path: 'appoinment-chat',
    component: AppoinmentChatComponent
  },
  {
    path: 'appoinment-help',
    component: AppoinmentHelpComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
