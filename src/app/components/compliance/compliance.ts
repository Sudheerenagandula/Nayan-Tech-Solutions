import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compliance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compliance.html',
  styleUrl: './compliance.css'
})
export class Compliance implements AfterViewInit, OnDestroy {
  certifications = [
    { label: 'ISO 27001 Certified', icon: 'bi bi-shield-check' },
    { label: 'Labour Law Compliant', icon: 'bi bi-file-earmark-check' },
    { label: 'Data Protection', icon: 'bi bi-lock' },
    { label: 'Registered Entity', icon: 'bi bi-patch-check' }
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
