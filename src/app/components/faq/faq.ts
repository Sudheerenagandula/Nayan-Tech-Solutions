import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StaffCategory {
  title: string;
  description: string;
  icon: string;
  experience: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq implements OnInit, OnDestroy, AfterViewInit {

  staffCategories: StaffCategory[] = [
    {
      title: 'IT Professionals',
      description: 'Developers, QA engineers, DevOps, cloud architects, and technical leads across every stack.',
      icon: 'bi bi-code-slash',
      experience: '8+ Years Experience'
    },
    {
      title: 'HR Professionals',
      description: 'HR generalists, talent acquisition specialists, payroll managers, and HR business partners.',
      icon: 'bi bi-people-fill',
      experience: '10+ Years Experience'
    },
    {
      title: 'Finance & Accounting',
      description: 'Accountants, financial analysts, auditors, and finance managers for businesses of any size.',
      icon: 'bi bi-calculator-fill',
      experience: '9+ Years Experience'
    },
    {
      title: 'Sales & Marketing',
      description: 'Business development executives, digital marketers, and sales leadership talent.',
      icon: 'bi bi-megaphone-fill',
      experience: '7+ Years Experience'
    },
    {
      title: 'Operations & Admin',
      description: 'Operations managers, executive assistants, and administrative support staff.',
      icon: 'bi bi-clipboard-check-fill',
      experience: '6+ Years Experience'
    },
    {
      title: 'Engineering & Manufacturing',
      description: 'Mechanical, electrical, and industrial engineers for manufacturing and production roles.',
      icon: 'bi bi-gear-fill',
      experience: '11+ Years Experience'
    }
  ];

  // ---------- CAROUSEL STATE ----------
  cardsPerView = 3;
  currentIndex = 0;
  private slideInterval!: ReturnType<typeof setInterval>;

  get maxIndex(): number {
    return Math.max(0, this.staffCategories.length - this.cardsPerView);
  }

  get trackTransform(): string {
    const percentPerCard = 100 / this.cardsPerView;
    return `translateX(-${this.currentIndex * percentPerCard}%)`;
  }

  ngOnInit(): void {
    this.setCardsPerView();
    this.startSlideshow();
  }

  ngAfterViewInit(): void {
    this.setCardsPerView();

    // ---------- SCROLL REVEAL ----------
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.revealEls.forEach(el => this.observer.observe(el.nativeElement));
  }

  ngOnDestroy(): void {
    this.stopSlideshow();
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setCardsPerView(): void {
    const width = window.innerWidth;
    if (width < 768) {
      this.cardsPerView = 1;
    } else if (width < 1100) {
      this.cardsPerView = 2;
    } else {
      this.cardsPerView = 3;
    }
    if (this.currentIndex > this.maxIndex) {
      this.currentIndex = this.maxIndex;
    }
  }

  startSlideshow(): void {
    this.stopSlideshow();
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 3500);
  }

  stopSlideshow(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide(): void {
    this.currentIndex =
      this.currentIndex >= this.maxIndex ? 0 : this.currentIndex + 1;
  }

  goToSlide(index: number): void {
    this.currentIndex = Math.min(index, this.maxIndex);
    this.startSlideshow();
  }

  get dotsArray(): number[] {
    return Array.from({ length: this.maxIndex + 1 }, (_, i) => i);
  }

  // ---------- SCROLL REVEAL refs ----------
  @ViewChildren('revealEl') revealEls!: QueryList<ElementRef>;
  private observer!: IntersectionObserver;
}
