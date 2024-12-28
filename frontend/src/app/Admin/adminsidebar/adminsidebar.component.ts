import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-adminsidebar',
  templateUrl: './adminsidebar.component.html',
  styleUrls: ['./adminsidebar.component.css'],
  animations: [
    trigger('submenuAnimation', [
      state('void', style({
        height: '0',
        opacity: 0
      })),
      state('*', style({
        height: '*',
        opacity: 1
      })),
      transition('void <=> *', animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class AdminsidebarComponent { 
  opened: boolean = true;
  isDarkMode: boolean = false;
  isCollapsed: boolean = false;
  toggleLeadsDropdown = false; 
  toggleAcciocateDropdown = false;
  toggleAssPaymentDropdown = false;
  toggleSettingDropdown = false;

  constructor(private router: Router) {
    // Initialize theme from localStorage if available
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    const savedCollapsed = localStorage.getItem('sidebarCollapsed');
    this.isCollapsed = savedCollapsed === 'true';
    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme() {
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    localStorage.setItem('sidebarCollapsed', this.isCollapsed.toString());
  }

  toggleDropdown(dropdown: string, event: Event) {
    event.stopPropagation();
    switch(dropdown) {
      case 'leads':
        this.toggleLeadsDropdown = !this.toggleLeadsDropdown;
        break;
      case 'associate':
        this.toggleAcciocateDropdown = !this.toggleAcciocateDropdown;
        break;
      case 'payment':
        this.toggleAssPaymentDropdown = !this.toggleAssPaymentDropdown;
        break;
      case 'settings':
        this.toggleSettingDropdown = !this.toggleSettingDropdown;
        break;
    }
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }
}
