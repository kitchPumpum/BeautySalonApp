import { Component } from '@angular/core';
import { MenuItem} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuItems: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
    { label: 'About', icon: 'pi pi-info', routerLink: '/about' },
    { label: 'Services', icon: 'pi pi-cog', routerLink: '/our-Services' },
    { label: 'Pricing', icon: 'pi pi-dollar', routerLink: '/pricing' },
    { label: 'Contact', icon: 'pi pi-envelope', routerLink: '/contact' },
    {
      label: 'Appointment',
      icon: 'pi pi-palette',
      items: [
        { label: 'BookNow', routerLink: '/book-appoinment' },
        { label: 'Chat', routerLink: '/appoinment-chat' },
        { label: 'Help', routerLink: '/appoinment-help' },
      ]
    }
  ];

  sidebarVisible: boolean = false;

  constructor(private router: Router) {}

  openSidebar() {
    this.sidebarVisible = true;
  }

  closeSidebar() {
    this.sidebarVisible = false;
  }
}
