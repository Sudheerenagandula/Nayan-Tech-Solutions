import { Component, AfterViewInit, OnDestroy, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Navbar } from "../../../components/navbar/navbar";
import { Footer } from "../../../components/footer/footer";

@Component({
  selector: 'app-management-services',
  standalone: true,
  imports: [CommonModule, FormsModule, Navbar, Footer],
  templateUrl: './management-services.html',
  styleUrl: './management-services.css'
})
export class ManagementServices implements AfterViewInit, OnDestroy {

  @ViewChildren('revealEl') revealEls!: QueryList<ElementRef<HTMLElement>>;
  private observer!: IntersectionObserver;

  quoteForm = {
    name: '',
    email: '',
    mobile: '',
    message: ''
  };

  appointmentForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  isSubmittingQuote = false;
  isSubmittingAppointment = false;

  submitQuote(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.isSubmittingQuote = true;

    // TODO: replace with your actual API call
    setTimeout(() => {
      console.log('Quote submitted:', this.quoteForm);
      this.isSubmittingQuote = false;
      form.resetForm();
    }, 800);
  }

  submitAppointment(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.isSubmittingAppointment = true;

    // TODO: replace with your actual API call
    setTimeout(() => {
      console.log('Appointment submitted:', this.appointmentForm);
      this.isSubmittingAppointment = false;
      form.resetForm();
    }, 800);
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
