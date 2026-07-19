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
      description: 'Nayan Tech Solutions staffing solutions are built to offer organizations expertise and flexibility. Our recruitment solutions seamlessly integrate technology and expertise to connect your business with exceptional talent quickly and efficiently. We handle every aspect of the recruitment process from candidate sourcing and screening to ensuring full legal compliance. Our fast onboarding procedures ensure that new hires are ready to contribute without unnecessary delays, helping you fill key positions when you need them most.',
      icon: 'bi bi-people',
      image: '/reporting-at-desk.jpg',
      path: '/services/staffing'
    },
    {
      title: 'Managed HR',
      description: 'Outsource specific HR activities or your entire HR department through our Managed HR Services division. We support 35,000+ employees across the public and private sectors. From seamless employee onboarding and ongoing management to ensuring payroll accuracy and full compliance with local laws, we take care of it all. Our expert HR team ensures your processes run smoothly, saving you time and minimizing risk. With us, you gain efficiency, accuracy, and peace of mind, knowing that your HR functions are in expert hands.',
      icon: 'bi bi-briefcase',
      image: '/reporting-at-desk.jpg',
      path: '/services/managed-hr'
    },
    {
      title: 'PEO & EOR',
      description: 'Through our global mobility platform clients can effectively and easily deploy staff in over 45+ countries. Employer of Record services empower you to expand quickly, compliantly, and cost-effectively. As your trusted partner in Dubai, we serve as the legal employer., ensuring labor compliance and allowing you to hire talent seamlessly across borders—without the need for a local entity.',
      icon: 'bi bi-globe',
      image: '/HR-and-payroll-transformation-meeting.png',
      path: '/services/peo-eor'
    },
    {
      title: 'HR Technology',
      description: 'Our in-house, custom-built technology provides access to cutting-edge Al-enabled software, empowering your business to grow securely in the digital age. Powerful HR Software in Dubai, UAE that helps automate repetitive and low value HR tasks. In addition the performance suite lets you manage strategic goals and KPIs, monitor employee wellbeing and much more. Built on the latest technology frameworks with unrivaled security features, take your employees into the new digital age with a software that helps your business perform.',
      icon: 'bi bi-cpu',
      image: '/reporting-at-desk.jpg',
      path: '/services/hr-technology'
    },
    {
      title: 'Remote Workforce',
      description: 'Companies no longer need to be limited by geography when finding the perfect candidate. Across the globe organizations are now using a remote and hybrid workforce for both permanent employees and contract professionals. In doing this, theyre discovering the hiring process is faster and allows them to attract a much larger talent pool. We help you find the right talent for your business, no matter where they are located. Our remote workforce solutions allow you to hire the best talent from anywhere in the world, while ensuring compliance with local labor laws and regulations.',
      icon: 'bi bi-laptop',
      image: '/reporting-at-desk.jpg',
      path: '/services/remote-workforce'
    },
    {
      title: 'Consulting',
      description: 'We support businesses facing strategic and operational challenges by providing them solution-oriented expert consultants on demand when they need them. Their flexible contracts allow companies to scale up or down according to their need. Our network of amazing professionals are ready to help you achieve your goals, and beyond. Whether you need assistance with HR, finance, operations, or any other area of your business, our consultants are here to provide the guidance and support you need to succeed.',
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
