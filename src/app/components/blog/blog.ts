import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface BlogPost {
  title: string;
  date: string;
  path: string;
  image?: string;
  tone?: 'blue' | 'dark';
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog implements AfterViewInit, OnDestroy {
  posts: BlogPost[] = [
    {
      title: '5 Payroll Compliance Mistakes to Avoid',
      date: 'Feb 4, 2026',
      image: '/reporting-at-desk.jpg',
      path: '/resources/payroll-compliance-mistakes'
    },
    {
      title: 'EOR vs PEO: Which Is Right for You?',
      date: 'Jan 20, 2026',
      tone: 'blue',
      path: '/resources/eor-vs-peo'
    },
    {
      title: 'Building a Remote-First Hiring Strategy',
      date: 'Feb 3, 2026',
      image: '/HR-and-payroll-transformation-meeting.jpg',
      path: '/resources/remote-hiring-strategy'
    },
    {
      title: 'Onboarding Checklist for New Hires',
      date: 'Dec 24, 2025',
      tone: 'dark',
      path: '/resources/onboarding-checklist'
    }
  ];

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
