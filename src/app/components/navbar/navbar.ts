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

  serviceGroups: ServiceGroup[] = [
    {
      title: 'Staffing & Recruiting',
      description: 'Permanent, contract and temporary placements.',
      links: [
        { label: 'Permanent Recruitment', path: '/services/permanent-recruitment' },
        { label: 'Temporary Staffing', path: '/services/temporary-staffing' },
        { label: 'Executive Search', path: '/services/executive-search' }
      ]
    },
    {
      title: 'Managed HR',
      description: 'End-to-end HR administration and support.',
      links: [
        { label: 'HR Outsourcing', path: '/services/hr-outsourcing' },
        { label: 'Payroll Processing', path: '/services/payroll' },
        { label: 'Leave & Compliance', path: '/services/compliance' }
      ]
    },
    {
      title: 'PEO & EOR',
      description: 'Hire and pay talent without a local entity.',
      links: [
        { label: 'Employer of Record', path: '/services/eor' },
        { label: 'PEO Services', path: '/services/peo' },
        { label: 'Visa & Onboarding', path: '/services/visa-onboarding' }
      ]
    },
    {
      title: 'HR Technology',
      description: 'Tools to run HR operations digitally.',
      links: [
        { label: 'HRIS Platform', path: '/services/hris' },
        { label: 'Automation Tools', path: '/services/automation' }
      ]
    },
    {
      title: 'Consulting',
      description: 'Expert advisory for scaling teams.',
      links: [
        { label: 'HR Advisory', path: '/services/hr-advisory' },
        { label: 'Workforce Planning', path: '/services/workforce-planning' }
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
      });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 60;
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

  @HostListener('document:keydown.escape')
  onEscape() {
    this.megaOpen = false;
    this.resourcesOpen = false;
  }
}
