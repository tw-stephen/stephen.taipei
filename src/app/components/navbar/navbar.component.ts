import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms cubic-bezier(0.4, 0, 0.2, 1)', style({ height: 0, opacity: 0 }))
      ])
    ])
  ]
})
export class NavbarComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  navLinks = [
    { label: '關於我', href: '#about' },
    { label: '技能', href: '#skills' },
    { label: '經歷', href: '#experience' },
    { label: '作品集', href: '#portfolio' },
    { label: '成就', href: '#achievements' },
    { label: '聯絡', href: '#contact' },
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
    // 滾動時自動關閉移動端選單
    if (this.isMobileMenuOpen()) {
      this.closeMobileMenu();
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    // 視窗大小改變時，如果超過 lg 斷點則關閉移動端選單
    if (window.innerWidth >= 1024 && this.isMobileMenuOpen()) {
      this.closeMobileMenu();
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  scrollTo(href: string, event: Event) {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      // 計算導航欄高度以避免內容被遮擋
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
      this.closeMobileMenu();
    }
  }
}
