import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from '../../components/footer/footer';
import { Navbar } from '../../components/navbar/navbar';

interface JobOpening {
  title: string;
  category: string;
  location: string;
  type: string;
  icon: string;
}

interface CompanyValue {
  title: string;
  description: string;
  icon: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Perk {
  label: string;
  icon: string;
}

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, Footer, Navbar],
  templateUrl: './careers.html',
  styleUrl: './careers.css',
})
export class Careers implements AfterViewInit, OnDestroy {
  companyName = 'Nayan Tech Solutions';
  applyEmail = 'careers@nayantechsolutions.com';

  stats: Stat[] = [
    { value: '150+', label: 'Professionals Placed' },
    { value: '30+', label: 'Client Partners' },
    { value: '2', label: 'Global Markets' },
    { value: '95%', label: 'Retention Rate' },
  ];

  values: CompanyValue[] = [
    {
      title: 'Ownership',
      description: 'Every team member owns outcomes, not just tasks — from day one.',
      icon: 'bi-bullseye',
    },
    {
      title: 'Growth',
      description: 'Structured learning paths and mentorship to help you level up fast.',
      icon: 'bi-graph-up-arrow',
    },
    {
      title: 'Collaboration',
      description: 'Flat teams, open communication, and no unnecessary hierarchy.',
      icon: 'bi-people',
    },
    {
      title: 'Impact',
      description: 'Work that directly shapes client outcomes and company growth.',
      icon: 'bi-lightning-charge',
    },
  ];

  openings: JobOpening[] = [
    {
      title: 'IT Recruiter',
      category: 'HR / TALENT',
      location: 'Hyderabad, India',
      type: 'Full-time',
      icon: 'bi-person-badge',
    },
    {
      title: 'Java Developer',
      category: 'ENGINEERING',
      location: 'Hyderabad, India',
      type: 'Full-time',
      icon: 'bi-code-slash',
    },
    {
      title: '.NET Developer',
      category: 'ENGINEERING',
      location: 'Hyderabad, India',
      type: 'Full-time',
      icon: 'bi-window-stack',
    },
    {
      title: 'DevOps Engineer',
      category: 'INFRASTRUCTURE',
      location: 'Remote',
      type: 'Full-time',
      icon: 'bi-diagram-3',
    },
  ];

  perks: Perk[] = [
    { label: 'Health Insurance', icon: 'bi-heart-pulse' },
    { label: 'Flexible Hours', icon: 'bi-clock-history' },
    { label: 'Learning Budget', icon: 'bi-book' },
    { label: 'Paid Time Off', icon: 'bi-airplane' },
    { label: 'Team Events', icon: 'bi-cup-hot' },
    { label: 'Performance Bonus', icon: 'bi-trophy' },
  ];

  // Every element with #revealEl in the template gets picked up here
  @ViewChildren('revealEl') revealEls!: QueryList<ElementRef<HTMLElement>>;

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    this.revealEls.forEach((el) => this.observer?.observe(el.nativeElement));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
