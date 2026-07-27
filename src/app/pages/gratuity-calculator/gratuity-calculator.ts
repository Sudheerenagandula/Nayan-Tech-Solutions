import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-gratuity-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, Navbar, Footer],
  templateUrl: './gratuity-calculator.html',
  styleUrl: './gratuity-calculator.css'
})
export class GratuityCalculator {
  actCovered: string = '';
  establishmentType: string = '';
  reasonForExit: string = '';
  basicSalary: number | null = null;
  unpaidLeaveDays: number = 0;
  dateOfJoining: string = '';
  exitDate: string = '';

  result: number | null = null;
  resultNote: string = '';

  faqs: Faq[] = [
    {
      question: 'Who is eligible for gratuity in India?',
      answer: 'Any employee who has completed at least 5 years of continuous service with the same employer is generally eligible for gratuity under the Payment of Gratuity Act, 1972. This minimum service requirement is waived in cases of death or disablement.'
    },
    {
      question: 'When does an employee become eligible for gratuity?',
      answer: 'Eligibility is triggered upon completion of 5 years of continuous service, or immediately in the event of death or disablement of the employee, regardless of tenure.'
    },
    {
      question: 'Is there a cap on the amount of gratuity payable?',
      answer: 'Yes, under the Payment of Gratuity Act, the maximum gratuity payable is currently capped at ₹20,00,000. Employers may pay more as an ex-gratia amount, but this is not mandated by law.'
    },
    {
      question: 'How is gratuity calculated in India?',
      answer: 'For employees covered under the Act, gratuity is calculated as (Last drawn Basic Salary + DA) × 15 × number of years of service, divided by 26. For employees not covered under the Act, the divisor used is 30 instead of 26.'
    },
    {
      question: 'What happens if an employee resigns before completing 5 years?',
      answer: 'In most cases, an employee who resigns or is terminated before completing 5 years of continuous service is not entitled to gratuity, except in cases of death or disablement.'
    },
    {
      question: 'Is there a penalty for not paying gratuity in India?',
      answer: 'Yes, under the Payment of Gratuity Act, employers who fail to pay gratuity within the prescribed time can be liable for interest on the delayed amount, and in cases of willful non-payment, may face imprisonment and/or fines.'
    }
  ];

  openFaqIndex: number | null = null;

  toggleFaq(index: number) {
    this.openFaqIndex = this.openFaqIndex === index ? null : index;
  }

  calculate() {
    this.result = null;
    this.resultNote = '';

    if (!this.basicSalary || !this.dateOfJoining || !this.exitDate || !this.actCovered || !this.establishmentType || !this.reasonForExit) {
      return;
    }

    const joinDate = new Date(this.dateOfJoining);
    const leaveDate = new Date(this.exitDate);

    if (leaveDate <= joinDate) {
      this.resultNote = 'Exit date must be after the date of joining.';
      return;
    }

    const msPerDay = 1000 * 60 * 60 * 24;
    let totalDays = Math.floor((leaveDate.getTime() - joinDate.getTime()) / msPerDay);
    totalDays -= (this.unpaidLeaveDays || 0);

    const years = totalDays / 365;

    // Eligibility check (waived for death/disablement)
    if (years < 5 && this.reasonForExit !== 'death_disablement') {
      this.result = 0;
      this.resultNote = 'Employee has not completed 5 years of continuous service, so no gratuity is payable (unless due to death or disablement).';
      return;
    }

    // Round years: 6+ months in the final year counts as a full year
    const completedYears = Math.floor(years);
    const remainderMonths = (years - completedYears) * 12;
    const yearsForCalc = remainderMonths >= 6 ? completedYears + 1 : completedYears;

    let gratuity = 0;

    if (this.establishmentType === 'seasonal') {
      // Seasonal establishments: 7 days' wages for each season worked
      gratuity = (this.basicSalary / 26) * 7 * yearsForCalc;
    } else if (this.actCovered === 'covered') {
      gratuity = (this.basicSalary * 15 * yearsForCalc) / 26;
    } else {
      gratuity = (this.basicSalary * 15 * yearsForCalc) / 30;
    }

    // Statutory cap
    const cap = 2000000; // ₹20,00,000
    if (gratuity > cap) {
      gratuity = cap;
      this.resultNote = 'Result capped at ₹20,00,000, the maximum gratuity payable under the Payment of Gratuity Act.';
    }

    this.result = Math.round(gratuity);
  }
}
