import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Client {
  name: string;
  logo: string;
  category?: string;
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.html',
  styleUrl: './clients.css'
})
export class Clients implements AfterViewInit, OnDestroy {

  clients: Client[] = [
    { name: 'Vantage Global Corp', logo: '/assets/clients/vantage-global.png', category: 'MNC' },
    { name: 'Meridian Industries', logo: '/assets/clients/meridian-industries.png', category: 'MNC' },
    { name: 'Orion Enterprises', logo: '/assets/clients/orion-enterprises.png', category: 'MNC' },

    { name: 'NovaStart Technologies', logo: '/assets/clients/novastart.png', category: 'Startup' },
    { name: 'Pulse Robotics', logo: '/assets/clients/pulse-robotics.png', category: 'Startup' },
    { name: 'BrightLane Labs', logo: '/assets/clients/brightlane-labs.png', category: 'Startup' },

    { name: 'MediCure Pharmaceuticals', logo: '/assets/clients/medicure-pharma.png', category: 'Pharma' },
    { name: 'VitalCore Life Sciences', logo: '/assets/clients/vitalcore-life-sciences.png', category: 'Pharma' },
    { name: 'Aurelia Biotech', logo: '/assets/clients/aurelia-biotech.png', category: 'Pharma' },

    { name: 'Cortex IT Solutions', logo: '/assets/clients/cortex-it.png', category: 'IT' },
    { name: 'Skyline Software Group', logo: '/assets/clients/skyline-software.png', category: 'IT' },

    { name: 'Sterling Capital Partners', logo: '/assets/clients/sterling-capital.png', category: 'Finance' },
    { name: 'Northgate Financial', logo: '/assets/clients/northgate-financial.png', category: 'Finance' },

    { name: 'Ferrowell Manufacturing', logo: '/assets/clients/ferrowell-manufacturing.png', category: 'Manufacturing' },
    { name: 'Titan Industrial Group', logo: '/assets/clients/titan-industrial.png', category: 'Manufacturing' }
  ];

  get loopedClients(): Client[] {
    return [...this.clients, ...this.clients];
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

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
