import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Office {
  city: string;
  address: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements AfterViewInit, OnDestroy {

  year = new Date().getFullYear();

  offices: Office[] = [
    {
      city: 'Hyderabad (HQ)',
      address: 'Western Aqua, Kondapur, Whitefields, HITEC City, Hyderabad, Telangana 500081'
    },
    {
      city: 'Bengaluru',
      address: 'Balaji Arcade, 20th L Cross Rd, 4th Block, Koramangala, Bengaluru, Karnataka 560095'
    },
    {
      city: 'United States',
      address: '#9891 Irvine Center Drive, STE 200, Irvine, CA 92618'
    }
  ];

  // ---------- SCROLL REVEAL ----------
  @ViewChildren('revealEl') revealEls!: QueryList<ElementRef>;
  private observer!: IntersectionObserver;

  ngAfterViewInit(): void {
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

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
