import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  image: string;
  heading: string;
  text: string;
  buttonLabel: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements OnInit, OnDestroy, AfterViewInit {

  slides: Slide[] = [
    {
      image: '/rrr.jpg',
      heading: 'Empowering businesses with tailored HR solutions',
      text: 'NayanTech Solutions connects skilled professionals with top companies across India.',
      buttonLabel: 'MORE'
    },
    {
      image: '/office-business.jpg',
      heading: 'At the heart of India\'s hiring story',
      text: 'We have stood beside growing businesses and ambitious professionals for years.',
      buttonLabel: 'MORE'
    },
    {
      image: '/Hiring-and-selection-scaled.jpeg',
      heading: 'Designed for what lies ahead',
      text: 'Our talent advisory enables organisations to scale with clarity and continuity',
      buttonLabel: 'MORE'
    }
  ];

  currentSlide: number = 0;
  private slideshowInterval!: ReturnType<typeof setInterval>;

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

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.startSlideshow();
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
}
