import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics.html',
  styleUrl: './statistics.css'
})
export class Statistics implements AfterViewInit, OnDestroy {
 statistics = [
  { value: '70+', title: 'Technical Experts', topText: 'Powering Digital', bottomText: 'Excellence' },
  { value: '900+', title: 'Projects Delivered', topText: 'Crafting Winning', bottomText: 'Solutions' },
  { value: '13+', title: 'Years of Experience', topText: 'Experience Meets', bottomText: 'Innovation' },
  { value: '300+', title: 'Clients Served', topText: 'Trusted Worldwide', bottomText: 'Partners' }
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
