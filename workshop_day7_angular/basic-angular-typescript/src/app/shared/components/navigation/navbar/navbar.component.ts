import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, NgClass, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  // ตัวแปร properties
  isMobileMenuOpen = false;
  showServicesMenu = false;
  showMobileServicesMenu = false;
  private closeTimeout: any = null;
  
  // ฟังก์ชัน toggleMobileMenu
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  
  // ฟังก์ชัน toggleServicesMenu สำหรับเมนูบริการ
  toggleServicesMenu() {
    this.showMobileServicesMenu = !this.showMobileServicesMenu;
  }
  
  // ฟังก์ชัน onmouseEnter สำหรับเมนูบริการ (Mobile)
  onMouseEnter() {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
    this.showServicesMenu = true;
  }
  
  // ฟังก์ชัน onMouseLeave สำหรับเมนูบริการ (Desktop)
  onMouseLeave() {
    this.closeTimeout = setTimeout(() => {
      this.showServicesMenu = false;
    }, 200);
  }
}