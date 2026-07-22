import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';

interface ServiceLink {
  label: string;
  path: string;
}

interface ServiceGroup {
  title: string;
  description: string;
  path: string; // route for the group itself
  links: ServiceLink[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isScrolled = false;
  isHome = true;
  megaOpen = false;
  resourcesOpen = false;
  hideNavbar = false;

  private lastScrollY = 0;
  private scrollThreshold = 80;

  serviceGroups: ServiceGroup[] = [
    {
      title: 'Management Services',
      description: 'End-to-end operational and workforce management support.',
      path: '/services/management-services',
      links: [
        { label: 'Vendor Management', path: '/services/vendor-management' },
        { label: 'Project Management', path: '/services/project-management' },
        { label: 'Managed Services', path: '/services/managed-services' }
      ]
    },
    {
      title: 'Enterprise Security Solutions',
      description: 'Comprehensive security solutions to protect your business.',
      path: '/services/enterprise-security-solutions',
      links: [
        { label: 'Cybersecurity Consulting', path: '/services/cybersecurity-consulting' },
        { label: 'Risk & Compliance', path: '/services/security-risk-compliance' },
        { label: 'Managed Security Services', path: '/services/managed-security-services' }
      ]
    },
    {
      title: 'IT Staffing',
      description: 'Skilled technology talent for contract, contract-to-hire and permanent roles.',
      path: '/services/it-staffing',
      links: [
        { label: 'Contract Staffing', path: '/services/it-contract-staffing' },
        { label: 'Permanent Placement', path: '/services/it-permanent-placement' },
        { label: 'Project-Based Teams', path: '/services/it-project-teams' }
      ]
    },
    {
      title: 'Non-IT Staffing',
      description: 'Qualified professionals across administrative, operational and business functions.',
      path: '/services/non-it-staffing',
      links: [
        { label: 'Administrative Staffing', path: '/services/non-it-admin-staffing' },
        { label: 'Operations Staffing', path: '/services/non-it-operations-staffing' },
        { label: 'Business Support Staffing', path: '/services/non-it-business-support' }
      ]
    }
  ];

  constructor(private router: Router) {
    this.isHome = this.router.url === '/';

    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        this.isHome = e.urlAfterRedirects === '/';
        this.isScrolled = false;
        this.megaOpen = false;
        this.resourcesOpen = false;
        this.hideNavbar = false;
        this.lastScrollY = 0;
      });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollY = window.scrollY;

    this.isScrolled = currentScrollY > 60;

    // don't hide navbar while a menu is open
    if (this.megaOpen || this.resourcesOpen) {
      this.hideNavbar = false;
      this.lastScrollY = currentScrollY;
      return;
    }

    // ignore tiny scroll jitters
    if (Math.abs(currentScrollY - this.lastScrollY) < 5) {
      return;
    }

    if (currentScrollY > this.lastScrollY && currentScrollY > this.scrollThreshold) {
      // scrolling down -> hide
      this.hideNavbar = true;
    } else {
      // scrolling up -> show
      this.hideNavbar = false;
    }

    this.lastScrollY = currentScrollY;
  }

  openMega() {
    this.megaOpen = true;
  }

  closeMega() {
    this.megaOpen = false;
  }

  toggleMega() {
    this.megaOpen = !this.megaOpen;
  }

  openResources() {
    this.resourcesOpen = true;
  }

  closeResources() {
    this.resourcesOpen = false;
  }

  toggleResources() {
    this.resourcesOpen = !this.resourcesOpen;
  }

  // Explicit navigation used by the mega menu (title + sub-links).
  // Bypasses the routerLink click/mouseleave race that was blocking navigation.
  goToService(path: string, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.megaOpen = false;
    this.router.navigateByUrl(path);
  }

  // Explicit navigation used by the resources dropdown, for the same reason.
  goToResource(path: string, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.resourcesOpen = false;
    this.router.navigateByUrl(path);
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.megaOpen = false;
    this.resourcesOpen = false;
  }
}
