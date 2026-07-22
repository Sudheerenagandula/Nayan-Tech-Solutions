import {  Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ClientLogo {
  name: string;
  src: string;
  active: boolean;
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.html',
  styleUrls: ['./clients.css']
})
export class ClientsComponent implements OnInit, OnDestroy {
  logos: ClientLogo[] = [
    { name: 'Tata Consultancy Services', src: 'assets/logos/tata.svg', active: false },
    { name: 'Wipro', src: 'assets/logos/wipro.svg', active: false },
    { name: 'Citibank', src: 'assets/logos/citibank.svg', active: false },
    { name: 'Tech Mahindra', src: 'assets/logos/techmahindra.svg', active: false },
    { name: 'Electronic Arts', src: 'assets/logos/ea.svg', active: false },
    { name: 'Acclaris', src: 'assets/logos/acclaris.svg', active: false }
  ];

  activeIndex = 0;
  private autoScrollTimer: any;

  ngOnInit(): void {
    this.setActive(0);
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoScrollTimer);
  }

  setActive(index: number): void {
    this.logos.forEach((logo, i) => (logo.active = i === index));
    this.activeIndex = index;
  }

  onLogoClick(index: number): void {
    this.setActive(index);
    // restart the timer so it doesn't jump right after a manual click
    clearInterval(this.autoScrollTimer);
    this.startAutoScroll();
  }

  private startAutoScroll(): void {
    this.autoScrollTimer = setInterval(() => {
      const next = (this.activeIndex + 1) % this.logos.length;
      this.setActive(next);
    }, 2500);
  }
}
