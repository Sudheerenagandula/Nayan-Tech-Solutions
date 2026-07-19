import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Slide {
  image: string;
  ghostText: string;
  heading: string;
  text: string;
  ctaText: string;
  ctaLink?: string;
  align: 'center' | 'left';
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements OnInit, OnDestroy, AfterViewInit {

  slides: Slide[] = [
    {
      image: '/rrr.jpg',
      ghostText: 'Stay ahead of the curve',
      heading: 'Empowering Businesses',
      text: 'NayanTech Solutions connects skilled professionals with top companies across India.',
      ctaText: 'Free Consultation',
      ctaLink: '/contact',
      align: 'center'
    },
    {
      image: '/office-business.jpg',
      ghostText: 'Built on trust and reach',
      heading: "India's Hiring Story",
      text: 'We have stood beside growing businesses and ambitious professionals for years.',
      ctaText: 'Free Consultation',
      ctaLink: '/contact',
      align: 'left'
    },
    {
      image: '/Hiring-and-selection-scaled.jpeg',
      ghostText: 'Designed for what lies ahead',
      heading: 'Scale With Clarity',
      text: 'Our talent advisory enables organisations to scale with clarity and continuity.',
      ctaText: 'Free Consultation',
      ctaLink: '/contact',
      align: 'left'
    }
  ];

  currentSlide: number = 0;
  private slideshowInterval!: ReturnType<typeof setInterval>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.startSlideshow();
  }

  ngOnDestroy(): void {
    this.stopSlideshow();
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  startSlideshow(): void {
    this.stopSlideshow();
    this.slideshowInterval = setInterval(() => {
      this.nextSlide();
      this.cdr.markForCheck();
    }, 5000);
  }

  stopSlideshow(): void {
    if (this.slideshowInterval) {
      clearInterval(this.slideshowInterval);
    }
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  previousSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToNext(): void {
    this.nextSlide();
    this.startSlideshow();
  }

  goToPrevious(): void {
    this.previousSlide();
    this.startSlideshow();
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.startSlideshow();
  }

  scrollToNextSection(): void {
    const heroEl = document.querySelector('.hero-section');
    if (heroEl) {
      const nextEl = heroEl.nextElementSibling;
      nextEl?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  splitWords(text: string): string[] {
    return text.split(' ');
  }

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

    this.observeRevealEls();
  }

  private observeRevealEls(): void {
    this.revealEls.forEach(el => this.observer.observe(el.nativeElement));
    this.revealEls.changes.subscribe((list: QueryList<ElementRef>) => {
      list.forEach(el => this.observer.observe(el.nativeElement));
    });
  }
}
