import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AdminHeaderComponent } from '../../../components/navigation/admin-header/admin-header.component';
import { AdminSidebarComponent } from '../../../components/sidebar/admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from '../../../components/footer/admin-footer/admin-footer.component';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css',
  imports: [
    NgClass,
    RouterOutlet,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminFooterComponent
  ],
  standalone: true
})
export class AdminLayoutComponent {
  isSidebarCollapsed = false;
  
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}