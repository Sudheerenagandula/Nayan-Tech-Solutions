import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

interface Feature {
  icon: string;
  text: string;
}

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, RouterLink, Navbar, Footer],
  templateUrl: './resources.html',
  styleUrl: './resources.css',
})
export class Resources implements AfterViewInit, OnDestroy {

  features: Feature[] = [
    { icon: 'bi bi-patch-check', text: 'Covers Policies & Job Descriptions in detail' },
    { icon: 'bi bi-hand-thumbs-up', text: 'Supports best practices in HR management' },
    { icon: 'bi bi-shield-check', text: 'Professionally written & easy to adapt' },
    { icon: 'bi bi-download', text: 'Ready for instant download' }
  ];

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
