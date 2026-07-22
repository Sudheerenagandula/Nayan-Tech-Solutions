import { Component } from '@angular/core';
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
export class ManagementServices {

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
}
