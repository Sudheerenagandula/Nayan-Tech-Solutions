import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Footer } from "../../../components/footer/footer";
import { Navbar } from "../../../components/navbar/navbar";

@Component({
  selector: 'app-enterprise-security-solutions',
  imports: [CommonModule, FormsModule, Footer, Navbar],
  templateUrl: './enterprise-security-solutions.html',
  styleUrl: './enterprise-security-solutions.css',
})
export class EnterpriseSecuritySolutions {

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

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
