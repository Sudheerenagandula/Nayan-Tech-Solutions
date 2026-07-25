import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";

interface JobOpening {
  index: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-careers',
  imports: [CommonModule, Footer, Navbar],
  templateUrl: './careers.html',
  styleUrl: './careers.css',
})
export class Careers implements AfterViewInit, OnDestroy {
  companyName = 'Nayan Tech Solutions';
  applyEmail = 'careers@nayantechsolutions.com';

  // Place the logo file at src/assets/nayan-logo.jpeg
  logoUrl = 'assets/nayan-logo.jpeg';

  openings: JobOpening[] = [
    { index: '01', title: 'IT Recruiter', category: 'HR / TALENT' },
    { index: '02', title: 'Java Developer', category: 'ENGINEERING' },
    { index: '03', title: 'DotNet Developer', category: 'ENGINEERING' },
    { index: '04', title: 'DevOps Engineer', category: 'INFRASTRUCTURE' },
  ];

  // Every element with #revealEl in the template gets picked up here
  @ViewChildren('revealEl') revealEls!: QueryList<ElementRef<HTMLElement>>;

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // reveal once, then stop watching that element
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    this.revealEls.forEach((el) => this.observer?.observe(el.nativeElement));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
