import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

export interface JobTemplate {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface Feature {
  icon: string;
  text: string;
}

@Component({
  selector: 'app-hr-templates',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, Navbar, Footer],
  templateUrl: './hr-templates.html',
  styleUrl: './hr-templates.css',
})
export class HrTemplates {

  features: Feature[] = [
    { icon: 'bi bi-patch-check', text: 'Covers Policies & Job Descriptions in detail' },
    { icon: 'bi bi-hand-thumbs-up', text: 'Supports best practices in HR management' },
    { icon: 'bi bi-shield-check', text: 'Professionally written & easy to adapt' },
    { icon: 'bi bi-download', text: 'Ready for instant download' }
  ];

  searchTerm = '';
  activeFilter: 'all' | 'job-descriptions' = 'all';

  templates: JobTemplate[] = [
    {
      slug: 'internal-auditor',
      title: 'Internal Auditor Job Description',
      description: 'Download a ready-to-use Internal Auditor job description template for HR teams hiring in the UAE and GCC. Professionally written, HR-approved, and easy to customize for your organization\'s specific needs.',
      image: '/templates/internal-auditor.jpg',
      category: 'job-descriptions'
    },
    {
      slug: 'payroll-specialist',
      title: 'Payroll Specialist Job Description',
      description: 'A ready-to-use, customizable job description to help HR teams and businesses find qualified Payroll Specialists in the UAE and GCC.',
      image: '/templates/payroll-specialist.jpg',
      category: 'job-descriptions'
    },
    {
      slug: 'financial-analyst',
      title: 'Financial Analyst Job Description',
      description: 'This ready-to-use job description template helps HR teams and hiring managers attract top finance talent who can analyze data, forecast trends, and support strategic decisions.',
      image: '/templates/financial-analyst.jpg',
      category: 'job-descriptions'
    },
    {
      slug: 'digital-marketing-specialist',
      title: 'Digital Marketing Specialist Job Description',
      description: 'Get a ready-to-use Digital Marketing Specialist job description template with detailed responsibilities, skills and hiring tips.',
      image: '/templates/digital-marketing.jpg',
      category: 'job-descriptions'
    },
    {
      slug: 'content-marketing-specialist',
      title: 'Content Marketing Specialist Job Description',
      description: 'Attract top creative talent with this editable Content Marketing Specialist job description template includes responsibilities, skills, and hiring guidance.',
      image: '/templates/content-marketing.jpg',
      category: 'job-descriptions'
    },
    {
      slug: 'social-media-manager',
      title: 'Social Media Manager Job Description',
      description: 'Access a ready-to-use Social Media Manager job description template with detailed responsibilities, skills, and hiring tips.',
      image: '/templates/social-media-manager.jpg',
      category: 'job-descriptions'
    },
    {
      slug: 'accountant',
      title: 'Accountant Job Description',
      description: 'A professional Accountant job description template designed for HR teams and businesses. Simple, clear, and customizable.',
      image: '/templates/accountant.jpg',
      category: 'job-descriptions'
    },
    {
      slug: 'finance-manager',
      title: 'Finance Manager Job Description',
      description: 'This Finance Manager Job Description Template is designed to create a professional, compliant job description that clearly defines leadership responsibilities.',
      image: '/templates/finance-manager.jpg',
      category: 'job-descriptions'
    },
    {
      slug: 'marketing-manager',
      title: 'Marketing Manager Job Description',
      description: 'Professional Marketing Manager job description template designed for HR teams. Clear, customizable, and easy to use.',
      image: '/templates/marketing-manager.jpg',
      category: 'job-descriptions'
    }
  ];

  get filteredTemplates(): JobTemplate[] {
    let list = this.templates;

    if (this.activeFilter === 'job-descriptions') {
      list = list.filter(t => t.category === 'job-descriptions');
    }

    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      list = list.filter(t =>
        t.title.toLowerCase().includes(term) ||
        t.description.toLowerCase().includes(term)
      );
    }

    return list;
  }

  setFilter(filter: 'all' | 'job-descriptions') {
    this.activeFilter = filter;
  }
}
