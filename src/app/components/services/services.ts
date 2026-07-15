import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services implements AfterViewInit, OnDestroy {

  services = [
    {
      title: 'Staffing & Recruiting',
      description: 'Nayan Tech Solutions staffing solutions are built to offer organizations expertise and flexibility. Our recruitment solutions seamlessly integrate technology and expertise to connect your business with exceptional talent quickly and efficiently.',
      icon: 'bi bi-people',
      image: '/reporting-at-desk.jpg',
      path: '/services/staffing'
    },
    {
      title: 'Managed HR',
      description: 'Outsource specific HR activities or your entire HR department through our Managed HR Services division. We support 35,000+ employees across the public and private sectors.',
      icon: 'bi bi-briefcase',
      image: '/reporting-at-desk.jpg',
      path: '/services/managed-hr'
    },
    {
      title: 'PEO & EOR',
      description: 'Through our global mobility platform clients can effectively and easily deploy staff in over 45+ countries.',
      icon: 'bi bi-globe',
      image: '/HR-and-payroll-transformation-meeting.png',
      path: '/services/peo-eor'
    },
    {
      title: 'HR Technology',
      description: 'Our in-house, custom-built technology provides access to cutting-edge Al-enabled software, empowering your business to grow securely in the digital age.',
      icon: 'bi bi-cpu',
      image: '/reporting-at-desk.jpg',
      path: '/services/hr-technology'
    },
    {
      title: 'Remote Workforce',
      description: 'Companies no longer need to be limited by geography when finding the perfect candidate. Across the globe organizations are now using a remote and hybrid workforce for both permanent employees and contract professionals. In doing this, theyre discovering the hiring process is faster and allows them to attract a much larger talent pool.',
      icon: 'bi bi-laptop',
      image: '/reporting-at-desk.jpg',
      path: '/services/remote-workforce'
    },
    {
      title: 'Consulting',
      description: 'We support businesses facing strategic and operational challenges by providing them solution-oriented expert consultants on demand when they need them. Their flexible contracts allow companies to scale up or down according to their need. Our network of amazing professionals are ready to help you achieve your goals, and beyond.',
      icon: 'bi bi-lightbulb',
      image: '/Auditing-Employee-Records-at-Desk.png',
      path: '/services/consulting'
    }
  ];

  // ---------- SCROLL REVEAL ----------
  @ViewChildren('revealEl') revealEls!: QueryList<ElementRef>;
  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    this.revealEls.forEach(el => this.observer.observe(el.nativeElement));
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
