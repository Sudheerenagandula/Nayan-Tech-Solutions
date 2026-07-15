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
  jurisdiction: string = '';
  contractType: string = '';
  reasonForExit: string = '';
  basicSalary: number | null = null;
  unpaidLeaveDays: number = 0;
  dateOfJoining: string = '';
  exitDate: string = '';

  result: number | null = null;
  resultNote: string = '';

  faqs: Faq[] = [
    {
      question: 'Who is eligible for gratuity in the UAE?',
      answer: 'Any employee who has completed at least one year of continuous service with their employer under a valid UAE labour contract is generally eligible for end-of-service gratuity, regardless of whether the contract is limited or unlimited.'
    },
    {
      question: 'When does an employee become eligible for gratuity?',
      answer: 'Eligibility begins after completing one full year of continuous employment. Employees who leave before completing one year are typically not entitled to gratuity.'
    },
    {
      question: 'Is there a cap on the amount of gratuity payable?',
      answer: 'Yes, total gratuity payable is capped at two years\' worth of the employee\'s basic salary, regardless of how many additional years they have served beyond that point.'
    },
    {
      question: 'How is gratuity calculated in the UAE?',
      answer: 'Gratuity is calculated based on the basic salary only (excluding allowances). Employees earn 21 days of basic salary for each of the first five years of service, and 30 days of basic salary for each additional year beyond five.'
    },
    {
      question: 'Under what circumstances can an employer withhold gratuity payment?',
      answer: 'An employer may withhold or reduce gratuity in specific cases, such as when an employee resigns before completing the minimum service period, or in cases of proven gross misconduct as defined under UAE Labour Law.'
    },
    {
      question: 'Is there a penalty for not paying End of Service Benefits (EOSB) in the UAE?',
      answer: 'Yes, employers who delay or fail to pay end-of-service benefits without valid justification can be liable for fines and may be required to pay the employee compensation for the delay, in addition to the original gratuity owed.'
    }
  ];

  openFaqIndex: number | null = null;

  toggleFaq(index: number) {
    this.openFaqIndex = this.openFaqIndex === index ? null : index;
  }

  calculate() {
    this.result = null;
    this.resultNote = '';

    if (!this.basicSalary || !this.dateOfJoining || !this.exitDate || !this.contractType || !this.reasonForExit || !this.jurisdiction) {
      return;
    }

    if (this.jurisdiction !== 'mainland') {
      this.resultNote = 'DIFC and ADGM follow different end-of-service schemes (e.g. DIFC\'s DEWS). Please consult an HR/legal professional for an accurate estimate in this jurisdiction.';
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

    if (years < 1) {
      this.result = 0;
      this.resultNote = 'Employee has not completed one year of service, so no gratuity is payable.';
      return;
    }

    const dailyWage = this.basicSalary / 30;
    let gratuity = 0;

    if (years <= 5) {
      gratuity = dailyWage * 21 * years;
    } else {
      gratuity = (dailyWage * 21 * 5) + (dailyWage * 30 * (years - 5));
    }

    // Cap at 2 years' basic salary
    const cap = this.basicSalary * 24;
    if (gratuity > cap) {
      gratuity = cap;
      this.resultNote = 'Result capped at 2 years\' basic salary, the maximum gratuity allowed under UAE Labour Law.';
    }

    if (this.reasonForExit === 'resignation') {
      if (years < 1) {
        gratuity = 0;
      } else if (years < 3) {
        gratuity = gratuity / 3;
        this.resultNote = 'Reduced to 1/3 of full gratuity, as resignation occurred before completing 3 years of service.';
      } else if (years < 5) {
        gratuity = (gratuity * 2) / 3;
        this.resultNote = 'Reduced to 2/3 of full gratuity, as resignation occurred before completing 5 years of service.';
      }
    }

    this.result = Math.round(gratuity);
  }
}
