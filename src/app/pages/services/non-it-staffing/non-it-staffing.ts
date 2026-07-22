import { Component, AfterViewInit, OnDestroy, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Footer } from "../../../components/footer/footer";
import { Navbar } from "../../../components/navbar/navbar";

interface Sector {
  icon: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-non-it-staffing',
  imports: [CommonModule, FormsModule, Footer, Navbar],
  templateUrl: './non-it-staffing.html',
  styleUrl: './non-it-staffing.css',
})
export class NonItStaffing implements AfterViewInit, OnDestroy {

  @ViewChildren('revealEl') revealEls!: QueryList<ElementRef<HTMLElement>>;
  private observer!: IntersectionObserver;

  // Hero "Get Your Quote" form
  quoteForm = {
    name: '',
    email: '',
    mobile: '',
    message: ''
  };

  quoteSubmitted = false;

  onQuoteSubmit(): void {
    if (!this.quoteForm.name || !this.quoteForm.email || !this.quoteForm.mobile || !this.quoteForm.message) {
      return;
    }

    console.log('Quote form submitted:', this.quoteForm);
    this.quoteSubmitted = true;

    setTimeout(() => {
      this.quoteForm = { name: '', email: '', mobile: '', message: '' };
      this.quoteSubmitted = false;
    }, 3000);
  }

  // "Schedule Appointment" contact form
  contactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  contactSubmitted = false;

  onContactSubmit(): void {
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.phone || !this.contactForm.message) {
      return;
    }

    console.log('Contact form submitted:', this.contactForm);
    this.contactSubmitted = true;

    setTimeout(() => {
      this.contactForm = { name: '', email: '', phone: '', message: '' };
      this.contactSubmitted = false;
    }, 3000);
  }

  // "Why Choose Us" 4-point grid
  whyChooseItems: WhyChooseItem[] = [
    {
      number: '1.',
      title: 'Tailored Workforce Solutions',
      description: "We curate staffing strategies that align with each industry's operational challenges and goals."
    },
    {
      number: '2.',
      title: 'Commitment to Quality',
      description: 'All placements are rigorously vetted to comply with industry regulations, licensing requirements, and safety standards.'
    },
    {
      number: '3.',
      title: 'Comprehensive Talent Network',
      description: 'Gain access to a robust pipeline of pre-screened, skilled candidates across a wide range of disciplines.'
    },
    {
      number: '4.',
      title: 'Nationwide Coverage',
      description: 'Our reach spans metropolitan hubs to remote locations, ensuring workforce support wherever your business operates.'
    }
  ];

  // "Sectors We Support" grid
  sectors: Sector[] = [
    {
      icon: 'it-management',
      title: 'IT Management',
      description: "Providing a reliable workforce for mining operations, engineering, plant maintenance, and workplace safety in support of Australia's vital resource sector."
    },
    {
      icon: 'construction',
      title: 'Construction & Infrastructure',
      description: 'Supplying skilled trades, civil engineers, project supervisors, and on-site labor to drive forward major infrastructure developments.'
    },
    {
      icon: 'logistics',
      title: 'Logistics & Supply Chain',
      description: 'Offering end-to-end staffing for warehouse personnel, inventory specialists, forklift operators, and logistics coordinators, ensuring seamless supply chain continuity.'
    },
    {
      icon: 'transport',
      title: 'Transport & Freight',
      description: 'Sourcing licensed drivers, transport managers, and operational support staff to maintain efficiency in fleet and freight operations.'
    },
    {
      icon: 'farming',
      title: 'Farming & Agriculture',
      description: 'Deploying seasonal laborers, farm technicians, agronomists, and heavy machinery operators to support agricultural productivity across regional Australia.'
    },
    {
      icon: 'manufacturing',
      title: 'Manufacturing & Production',
      description: 'Delivering dependable staffing for production lines, assembly operations, quality control, and industrial plant functions.'
    },
    {
      icon: 'healthcare',
      title: 'Healthcare & Aged Care',
      description: 'Recruiting qualified, compassionate healthcare professionals, including nurses, caregivers, and allied health staff for medical and aged care institutions.',
      highlighted: true
    },
    {
      icon: 'hospitality',
      title: 'Hospitality & Retail',
      description: 'Supplying dynamic front-line personnel such as chefs, customer service staff, sales associates, and hospitality managers to meet fast-paced business demands.'
    },
    {
      icon: 'energy',
      title: 'Energy & Utilities',
      description: "Staffing solutions for the renewable energy, utilities, and power generation sectors—contributing to Australia's sustainable energy future."
    },
    {
      icon: 'government',
      title: 'Government & Public Sector',
      description: 'Partnering with public agencies to provide administrative, technical, and field-based personnel for both short- and long-term assignments.'
    }
  ];

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToContact(): void {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    this.revealEls.forEach((el) => this.observer.observe(el.nativeElement));
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
