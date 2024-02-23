import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

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
    
  ];
  
}
