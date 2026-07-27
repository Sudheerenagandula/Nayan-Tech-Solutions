import { Component, AfterViewInit, OnDestroy, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Footer } from "../../../components/footer/footer";
import { Navbar } from "../../../components/navbar/navbar";
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-enterprise-security-solutions',
  imports: [CommonModule, FormsModule, Footer, Navbar],
  templateUrl: './enterprise-security-solutions.html',
  styleUrl: './enterprise-security-solutions.css',
})
export class EnterpriseSecuritySolutions implements AfterViewInit, OnDestroy {

  @ViewChildren('revealEl') revealEls!: QueryList<ElementRef<HTMLElement>>;
  private observer!: IntersectionObserver;

  // EmailJS config
  private readonly EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
  private readonly EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  private readonly EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  // Hero "Get Your Quote" form
  quoteForm = {
    name: '',
    email: '',
    mobile: '',
    message: ''
  };

  quoteSubmitted = false;
  quoteSending = false;
  quoteError = '';

  onQuoteSubmit(): void {
    if (!this.quoteForm.name || !this.quoteForm.email || !this.quoteForm.mobile || !this.quoteForm.message) {
      return;
    }

    this.quoteSending = true;
    this.quoteError = '';

    emailjs.send(
      this.EMAILJS_SERVICE_ID,
      this.EMAILJS_TEMPLATE_ID,
      {
        from_name: this.quoteForm.name,
        from_email: this.quoteForm.email,
        mobile: this.quoteForm.mobile,
        message: this.quoteForm.message
      },
      this.EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        this.quoteSending = false;
        this.quoteSubmitted = true;
        this.quoteForm = { name: '', email: '', mobile: '', message: '' };

        setTimeout(() => {
          this.quoteSubmitted = false;
        }, 3000);
      },
      (error) => {
        this.quoteSending = false;
        this.quoteError = 'Something went wrong. Please try again.';
        console.error('EmailJS error:', error);
      }
    );
  }

  // "Schedule Appointment" contact form
  contactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  contactSubmitted = false;
  contactSending = false;
  contactError = '';

  onContactSubmit(): void {
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.phone || !this.contactForm.message) {
      return;
    }

    this.contactSending = true;
    this.contactError = '';

    emailjs.send(
      this.EMAILJS_SERVICE_ID,
      this.EMAILJS_TEMPLATE_ID,
      {
        from_name: this.contactForm.name,
        from_email: this.contactForm.email,
        mobile: this.contactForm.phone,
        message: this.contactForm.message
      },
      this.EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        this.contactSending = false;
        this.contactSubmitted = true;
        this.contactForm = { name: '', email: '', phone: '', message: '' };

        setTimeout(() => {
          this.contactSubmitted = false;
        }, 3000);
      },
      (error) => {
        this.contactSending = false;
        this.contactError = 'Something went wrong. Please try again.';
        console.error('EmailJS error:', error);
      }
    );
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
