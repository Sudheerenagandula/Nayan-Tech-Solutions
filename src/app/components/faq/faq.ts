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
  dataAnalytics: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="38" fill="#EDF1FE"/>
    <g stroke="#3B5FE0" stroke-width="2.2" fill="none">
      <ellipse cx="40" cy="40" rx="24" ry="10"/>
      <ellipse cx="40" cy="40" rx="24" ry="10" transform="rotate(60 40 40)"/>
      <ellipse cx="40" cy="40" rx="24" ry="10" transform="rotate(120 40 40)"/>
    </g>
    <circle cx="40" cy="40" r="5" fill="#3B5FE0"/>
    <circle cx="17" cy="33" r="2.5" fill="#3B5FE0"/>
    <circle cx="60" cy="47" r="2.5" fill="#3B5FE0"/>
    <circle cx="46" cy="15" r="2" fill="#3B5FE0"/>
  </svg>`,

  cloudModernization: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="38" fill="#EDF1FE"/>
    <rect x="18" y="22" width="44" height="30" rx="3" fill="#3B5FE0"/>
    <rect x="22" y="26" width="36" height="22" rx="1.5" fill="#FFFFFF"/>
    <path d="M27 44l5-8 5 4 8-10" stroke="#3B5FE0" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="32" y="52" width="16" height="5" rx="1.5" fill="#3B5FE0"/>
    <rect x="26" y="58" width="28" height="4" rx="2" fill="#8FA6F2"/>
  </svg>`,

  appDevelopment: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="38" fill="#EDF1FE"/>
    <path d="M40 16c-10 0-18 8-18 18 0 7 3.5 11 8 14v6h20v-6c4.5-3 8-7 8-14 0-10-8-18-18-18z" fill="#3B5FE0"/>
    <rect x="33" y="58" width="14" height="5" rx="1.5" fill="#3B5FE0"/>
    <path d="M40 30v14M34 37h12" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M54 20l5-5M54 20l5 5" stroke="#3B5FE0" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="22" cy="24" r="2.5" fill="#3B5FE0"/>
    <circle cx="60" cy="34" r="2" fill="#3B5FE0"/>
  </svg>`,

  devops: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="38" fill="#EDF1FE"/>
    <path d="M24 26c0-4 7-7 16-7s16 3 16 7-7 7-16 7-16-3-16-7z" fill="#8FA6F2"/>
    <path d="M24 26v10c0 4 7 7 16 7s16-3 16-7V26" stroke="#3B5FE0" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <path d="M24 36v10c0 4 7 7 16 7s16-3 16-7V36" stroke="#3B5FE0" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <path d="M24 46v8c0 4 7 7 16 7s16-3 16-7v-8" stroke="#3B5FE0" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  </svg>`,

  ai: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="38" fill="#EDF1FE"/>
    <path d="M40 14c-3 6-3 10 0 14 3-4 3-8 0-14z" fill="#3B5FE0"/>
    <path d="M32 28h16l4 10-4 22H32l-4-22z" fill="#3B5FE0"/>
    <rect x="34" y="60" width="12" height="5" rx="1.5" fill="#8FA6F2"/>
    <circle cx="40" cy="42" r="4" fill="#FFFFFF"/>
    <circle cx="20" cy="24" r="2" fill="#3B5FE0"/>
    <circle cx="60" cy="24" r="2" fill="#3B5FE0"/>
    <path d="M50 20l3 3M53 20l-3 3" stroke="#3B5FE0" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`,

  iam: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="38" fill="#EDF1FE"/>
    <path d="M40 18l16 6v12c0 12-7 20-16 24-9-4-16-12-16-24V24z" fill="#3B5FE0"/>
    <path d="M33 39l5 5 10-10" stroke="#FFFFFF" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M40 14l2 4-2 4-2-4z" fill="#8FA6F2"/>
    <path d="M58 30l3 1-1 3-3-1z" fill="#8FA6F2"/>
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
