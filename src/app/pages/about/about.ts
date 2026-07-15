// import { Component, ElementRef, AfterViewInit, ViewChild, QueryList, ViewChildren, HostListener, OnInit } from '@angular/core';
// import { Navbar } from '../../components/navbar/navbar';
// import { Footer } from '../../components/footer/footer';
// import { CommonModule } from '@angular/common';
// import { Cta } from '../../components/cta/cta';

// @Component({
//   selector: 'app-about',
//   standalone: true,
//   imports: [
//     CommonModule,
//     Navbar,
//     Footer,
//     Cta
//   ],
//   templateUrl: './about.html',
//   styleUrl: './about.css'
// })
// export class About implements OnInit, AfterViewInit {

//   heroLine1 = 'Empowering Businesses,';
//   heroLine2 = 'Transforming Lives with';
//   heroLine3 = 'Leading Tech Talent';

//   letters1: string[] = [];
//   letters2: string[] = [];
//   letters3: string[] = [];

//   @ViewChildren('letterSpan') letterSpans!: QueryList<ElementRef>;

//   private spanEls: HTMLElement[] = [];
//   private ticking = false;
//   private mouseX = -9999;
//   private mouseY = -9999;

//   ngOnInit() {
//     this.letters1 = this.heroLine1.split('');
//     this.letters2 = this.heroLine2.split('');
//     this.letters3 = this.heroLine3.split('');
//   }

//   ngAfterViewInit() {
//     this.spanEls = this.letterSpans.map(el => el.nativeElement as HTMLElement);
//   }

//   @HostListener('mousemove', ['$event'])
//   onMouseMove(event: MouseEvent) {
//     this.mouseX = event.clientX;
//     this.mouseY = event.clientY;
//     if (!this.ticking) {
//       this.ticking = true;
//       requestAnimationFrame(() => this.updateLetters());
//     }
//   }

//   @HostListener('mouseleave')
//   onMouseLeave() {
//     this.mouseX = -9999;
//     this.mouseY = -9999;
//     requestAnimationFrame(() => this.updateLetters());
//   }

//   private updateLetters() {
//     const maxDistance = 120;

//     this.spanEls.forEach(span => {
//       const rect = span.getBoundingClientRect();
//       const centerX = rect.left + rect.width / 2;
//       const centerY = rect.top + rect.height / 2;

//       const dx = this.mouseX - centerX;
//       const dy = this.mouseY - centerY;
//       const distance = Math.sqrt(dx * dx + dy * dy);

//       const strength = Math.max(0, 1 - distance / maxDistance);
//       const translateY = -strength * 18;
//       const scale = 1 + strength * 0.25;

//       span.style.transform = `translateY(${translateY}px) scale(${scale})`;
//     });

//     this.ticking = false;
//   }
// }



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
