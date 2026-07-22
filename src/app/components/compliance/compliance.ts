import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface ProcessCard {
  icon: SafeHtml;
  title: string;
  description: string;
}

@Component({
  selector: 'app-compliance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compliance.html',
  styleUrls: ['./compliance.css']
})
export class ComplianceComponent {
  private icons = {
    constantResearch: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="14" width="34" height="42" rx="2" fill="#1E6FE0"/>
      <rect x="22" y="22" width="22" height="3" rx="1.5" fill="#FFFFFF"/>
      <rect x="22" y="30" width="22" height="3" rx="1.5" fill="#FFFFFF"/>
      <rect x="22" y="38" width="14" height="3" rx="1.5" fill="#FFFFFF"/>
      <circle cx="52" cy="50" r="14" fill="#FFFFFF" stroke="#1E6FE0" stroke-width="3"/>
      <circle cx="52" cy="50" r="7" fill="#1E6FE0"/>
      <rect x="50" y="47" width="4" height="7" rx="1" fill="#FFFFFF"/>
      <path d="M62 60l8 8" stroke="#1E6FE0" stroke-width="4" stroke-linecap="round"/>
    </svg>`,

    formulatingIdeas: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="16" width="12" height="46" rx="2" fill="#1E6FE0"/>
      <rect x="12" y="16" width="12" height="8" fill="#0D4EA6"/>
      <rect x="27" y="20" width="10" height="42" rx="2" fill="#1E6FE0"/>
      <path d="M27 20l5-6 5 6z" fill="#1E6FE0"/>
      <circle cx="56" cy="34" r="16" fill="#1E6FE0"/>
      <path d="M56 24c-6 0-10 4-10 10 0 4 2 6 4 8v4h12v-4c2-2 4-4 4-8 0-6-4-10-10-10z" fill="#FFFFFF"/>
      <rect x="50" y="48" width="12" height="4" rx="1.5" fill="#1E6FE0"/>
    </svg>`,

    meetingAspiration: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="20" r="7" fill="#1E6FE0"/>
      <path d="M28 18a12 12 0 0 1 24 0" stroke="#1E6FE0" stroke-width="3" fill="none" stroke-linecap="round"/>
      <circle cx="18" cy="42" r="7" fill="#1E6FE0"/>
      <path d="M6 62c0-9 5-15 12-15s12 6 12 15" fill="#1E6FE0"/>
      <circle cx="62" cy="42" r="7" fill="#1E6FE0"/>
      <path d="M50 62c0-9 5-15 12-15s12 6 12 15" fill="#1E6FE0"/>
      <circle cx="40" cy="46" r="8" fill="#1E6FE0"/>
      <path d="M25 66c0-10 7-17 15-17s15 7 15 17" fill="#1E6FE0"/>
      <path d="M25 66h30v4H25z" fill="#FFFFFF"/>
    </svg>`
  };

  cards: ProcessCard[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.cards = [
      {
        icon: this.safe(this.icons.constantResearch),
        title: 'Constant research',
        description: `Through continuous research, we gather our customers' pain points and offer scalable solutions. Our consultants have the expertise to collect data from third-party surveys, interviews, and focus groups. We also use the observation method to deliver the right solution.`
      },
      {
        icon: this.safe(this.icons.formulatingIdeas),
        title: 'Formulating ideas',
        description: `Our consultants constantly ideate and arrive at the right technology for every problem. Then, our project team collates those ideas and integrates them into every technology solution we provide. In this way, we create business value that goes beyond just ROI.`
      },
      {
        icon: this.safe(this.icons.meetingAspiration),
        title: 'Meeting aspiration',
        description: `Our consultants have the deep subject knowledge to design, develop, and deliver solutions based on research and problem-solving ideas. Innovation is well integrated with our solutions to create appropriate BI solutions to derive maximum value from data.`
      }
    ];
  }

  private safe(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
