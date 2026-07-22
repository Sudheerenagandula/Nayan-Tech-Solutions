import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface ServiceCard {
  icon: SafeHtml;
  title: string;
  description: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrls: ['./faq.css']
})
export class FaqComponent {
  private icons = {
    dataAnalytics: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="#EAF0FF"/>
      <circle cx="32" cy="32" r="4" fill="#2F5BEA"/>
      <ellipse cx="32" cy="32" rx="22" ry="9" stroke="#2F5BEA" stroke-width="2" transform="rotate(0 32 32)"/>
      <ellipse cx="32" cy="32" rx="22" ry="9" stroke="#2F5BEA" stroke-width="2" transform="rotate(60 32 32)"/>
      <ellipse cx="32" cy="32" rx="22" ry="9" stroke="#2F5BEA" stroke-width="2" transform="rotate(120 32 32)"/>
      <circle cx="14" cy="27" r="2.5" fill="#2F5BEA"/>
      <circle cx="50" cy="37" r="2.5" fill="#2F5BEA"/>
      <circle cx="30" cy="10" r="2.5" fill="#2F5BEA"/>
    </svg>`,

    cloudModernization: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="#EAF0FF"/>
      <rect x="14" y="18" width="36" height="24" rx="3" stroke="#2F5BEA" stroke-width="2"/>
      <line x1="14" y1="26" x2="50" y2="26" stroke="#2F5BEA" stroke-width="2"/>
      <line x1="32" y1="18" x2="32" y2="42" stroke="#2F5BEA" stroke-width="2"/>
      <path d="M20 36l4-6 4 3 6-8" stroke="#2F5BEA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="26" y="44" width="12" height="4" rx="1" fill="#2F5BEA"/>
      <rect x="22" y="48" width="20" height="3" rx="1.5" fill="#2F5BEA"/>
    </svg>`,

    appDevelopment: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="#EAF0FF"/>
      <path d="M32 12c-8 0-14 6-14 14 0 5 2.5 8.5 6 11v5h16v-5c3.5-2.5 6-6 6-11 0-8-6-14-14-14z" stroke="#2F5BEA" stroke-width="2" stroke-linejoin="round"/>
      <rect x="26" y="46" width="12" height="4" rx="1" fill="#2F5BEA"/>
      <circle cx="20" cy="20" r="2" fill="#2F5BEA"/>
      <path d="M44 18l4-4M44 18l4 4" stroke="#2F5BEA" stroke-width="2" stroke-linecap="round"/>
      <path d="M32 22v10M28 27h8" stroke="#2F5BEA" stroke-width="2" stroke-linecap="round"/>
    </svg>`,

    devops: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="#EAF0FF"/>
      <ellipse cx="32" cy="20" rx="14" ry="6" stroke="#2F5BEA" stroke-width="2"/>
      <path d="M18 20v10c0 3.3 6.3 6 14 6s14-2.7 14-6V20" stroke="#2F5BEA" stroke-width="2"/>
      <path d="M18 30v10c0 3.3 6.3 6 14 6s14-2.7 14-6V30" stroke="#2F5BEA" stroke-width="2"/>
    </svg>`,

    ai: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="#EAF0FF"/>
      <path d="M32 10l16 30H16L32 10z" stroke="#2F5BEA" stroke-width="2" stroke-linejoin="round"/>
      <circle cx="32" cy="30" r="4" stroke="#2F5BEA" stroke-width="2"/>
      <path d="M26 46l6 6 6-6" stroke="#2F5BEA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="16" cy="18" r="2" fill="#2F5BEA"/>
      <circle cx="48" cy="18" r="2" fill="#2F5BEA"/>
    </svg>`,

    iam: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="#EAF0FF"/>
      <path d="M32 14L18 20v10c0 9 6 15.5 14 18 8-2.5 14-9 14-18V20L32 14z" stroke="#2F5BEA" stroke-width="2" stroke-linejoin="round"/>
      <path d="M26 32l4 4 8-8" stroke="#2F5BEA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  };

  services: ServiceCard[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.services = [
      {
        icon: this.safe(this.icons.dataAnalytics),
        title: 'Enterprise Data Analytics',
        description: 'Increase your data and analytics capabilities to generate insights, deliver sustainable value...'
      },
      {
        icon: this.safe(this.icons.cloudModernization),
        title: 'Cloud Modernization',
        description: 'Our cloud and technology services enable you to avail yourself of a higher storage meeting scalable...'
      },
      {
        icon: this.safe(this.icons.appDevelopment),
        title: 'Application Development',
        description: 'ManVision Technologies helps you meet business goals, operational agility, and employee and customer...'
      },
      {
        icon: this.safe(this.icons.devops),
        title: 'DevOps',
        description: 'Our DevOps consulting services include automating end-to-end processes for high-quality software...'
      },
      {
        icon: this.safe(this.icons.ai),
        title: 'Artificial Intelligence',
        description: 'Our comprehensive AI offerings include ML, voice recognition, and machine vision for every business...'
      },
      {
        icon: this.safe(this.icons.iam),
        title: 'Identity Access Management',
        description: 'Our IAM solutions help businesses to prevent the most sophisticated attacks giving you immense peace of mind'
      }
    ];
  }

  private safe(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
