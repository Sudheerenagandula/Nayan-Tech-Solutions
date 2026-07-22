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
