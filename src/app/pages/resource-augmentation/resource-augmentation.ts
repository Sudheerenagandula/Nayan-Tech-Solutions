import {
  Component, AfterViewInit, OnDestroy, ElementRef, Renderer2,}
   from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";

@Component({
  selector: 'app-resource-augmentation',
  imports: [Footer, Navbar],
  templateUrl: './resource-augmentation.html',
  styleUrl: './resource-augmentation.css',
})
export class ResourceAugmentation implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const revealEls = this.el.nativeElement.querySelectorAll('.ra-reveal');

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, 'ra-reveal-visible');
            // Stop observing once revealed so it doesn't re-trigger
            this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    revealEls.forEach((elRef: Element) => this.observer?.observe(elRef));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
