import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { CommonModule } from '@angular/common';
import { Cta } from '../../components/cta/cta';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
     RouterLink,
    Navbar,
    Footer,
    Cta
  ],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit, AfterViewInit {

  @ViewChildren('revealEl') revealEls!: QueryList<ElementRef>;

  private observer!: IntersectionObserver;

  ngOnInit() {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // stop watching once revealed, so it doesn't re-trigger
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2 // element needs to be 20% visible before it triggers
      }
    );

    this.revealEls.forEach(el => {
      this.observer.observe(el.nativeElement);
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
