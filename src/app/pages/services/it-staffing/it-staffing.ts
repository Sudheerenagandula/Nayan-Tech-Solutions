import { Component, AfterViewInit, OnDestroy, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Footer } from "../../../components/footer/footer";
import { Navbar } from "../../../components/navbar/navbar";

@Component({
  selector: 'app-it-staffing',
  imports: [CommonModule, FormsModule, Footer, Navbar],
  templateUrl: './it-staffing.html',
  styleUrl: './it-staffing.css',
})
export class ItStaffing implements AfterViewInit, OnDestroy {

  @ViewChildren('revealEl') revealEls!: QueryList<ElementRef<HTMLElement>>;
  private observer!: IntersectionObserver;

  // Web3Forms config
  private readonly WEB3FORMS_ACCESS_KEY = '80fe204c-0ecd-4162-b5fc-c18fcc22319f';
  private readonly WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

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

    fetch(this.WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        access_key: this.WEB3FORMS_ACCESS_KEY,
        subject: 'New Quote Request - NayanTech (IT Staffing)',
        form_name: 'Get Your Quote',
        name: this.quoteForm.name,
        email: this.quoteForm.email,
        mobile: this.quoteForm.mobile,
        message: this.quoteForm.message
      })
    })
      .then(res => res.json())
      .then(data => {
        this.quoteSending = false;

        if (data.success) {
          this.quoteSubmitted = true;
          this.quoteForm = { name: '', email: '', mobile: '', message: '' };

          setTimeout(() => {
            this.quoteSubmitted = false;
          }, 3000);
        } else {
          this.quoteError = 'Something went wrong. Please try again.';
          console.error('Web3Forms error:', data);
        }
      })
      .catch(error => {
        this.quoteSending = false;
        this.quoteError = 'Something went wrong. Please try again.';
        console.error('Submission failed:', error);
      });
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

    fetch(this.WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        access_key: this.WEB3FORMS_ACCESS_KEY,
        subject: 'New Appointment Request - NayanTech (IT Staffing)',
        form_name: 'Schedule Appointment',
        name: this.contactForm.name,
        email: this.contactForm.email,
        phone: this.contactForm.phone,
        message: this.contactForm.message
      })
    })
      .then(res => res.json())
      .then(data => {
        this.contactSending = false;

        if (data.success) {
          this.contactSubmitted = true;
          this.contactForm = { name: '', email: '', phone: '', message: '' };

          setTimeout(() => {
            this.contactSubmitted = false;
          }, 3000);
        } else {
          this.contactError = 'Something went wrong. Please try again.';
          console.error('Web3Forms error:', data);
        }
      })
      .catch(error => {
        this.contactSending = false;
        this.contactError = 'Something went wrong. Please try again.';
        console.error('Submission failed:', error);
      });
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
