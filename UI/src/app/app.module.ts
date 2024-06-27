import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { OurServicesComponent } from './our-services/our-services.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BookAppoinmentComponent } from './book-appoinment/book-appoinment.component';

import { DropdownModule } from 'primeng/dropdown'; // Import DropdownModule from PrimeNG
import { AvatarModule } from 'primeng/avatar'; // Import AvatarModule from PrimeNG
import { MenuModule } from 'primeng/menu'; // Import MenuModule from PrimeNG
import { SidebarModule } from 'primeng/sidebar';
import { AppoinmentHelpComponent } from './appoinment-help/appoinment-help.component';
import { AppoinmentChatComponent } from './appoinment-chat/appoinment-chat.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // adjust import path as per your library
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    HomeComponent,
    FooterComponent,
    OurServicesComponent,
    PricingComponent,
    AboutComponent,
    ContactComponent,
    BookAppoinmentComponent,
    AppoinmentHelpComponent,
    AppoinmentChatComponent,
    LoginComponent,
    SignupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule,
    DropdownModule, // Add DropdownModule to the imports array
    AvatarModule, // Add AvatarModule to the imports array
    MenuModule, // Add MenuModule to the imports array
    SidebarModule,
    FullCalendarModule,
    CalendarModule,
    FormsModule,
    CheckboxModule,
    InputTextModule,
    MessagesModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
