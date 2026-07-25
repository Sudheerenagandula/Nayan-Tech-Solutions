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
      title: 'Top Recruitment Companies in India: How to Choose the Best for Your Hiring Needs',
      date: 'Feb 4, 2026',
      image: '/reporting-at-desk.jpg',
      path: '/resources/payroll-compliance-mistakes'
    },
    {
      title: 'Building Strong Teams Through IT and Non-IT Staffing Expertise from a Leading Recruitment Company in India',
      date: 'Jan 20, 2026',
      image: '/people-in-the-off.jpg',
      path: '/resources/eor-vs-peo'
    },
    {
      title: 'Building High-Performance Tech Teams with Expert IT Staffing',
      date: 'Feb 3, 2026',
      image: '/Tech-Team.jpg',
      path: '/resources/remote-hiring-strategy'
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
