import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { Cta } from '../../components/cta/cta';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    Navbar,
    Footer,
    Cta
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements AfterViewInit, OnDestroy {

  // ---------- FORM ----------
  formData = {
    name: '',
    email: '',
    service: 'Looking For Job',
    subject: '', // holds phone number
    message: ''
  };

  submitted = false;
  errorMsg = '';

  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return;
    }

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        access_key: '80fe204c-0ecd-4162-b5fc-c18fcc22319f', // <-- paste your Web3Forms Access Key here
        subject: 'New Contact Form Submission - NayanTech',
        name: this.formData.name,
        email: this.formData.email,
        phone: this.formData.subject,
        looking_for: this.formData.service,
        message: this.formData.message
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.submitted = true;
          this.errorMsg = '';
          setTimeout(() => {
            this.submitted = false;
            this.formData = { name: '', email: '', service: 'Looking For Job', subject: '', message: '' };
          }, 3000);
        } else {
          this.errorMsg = 'Something went wrong. Please try again.';
          console.error('Web3Forms error:', data);
        }
      })
      .catch(err => {
        this.errorMsg = 'Something went wrong. Please try again.';
        console.error('Submission failed:', err);
      });
  }

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
