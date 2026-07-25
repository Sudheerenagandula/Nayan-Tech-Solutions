import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Footer } from "../footer/footer";
import { Navbar } from "../navbar/navbar";

interface RecentPost {
  image: string;
  title: string;
  date: string;
  link: string;
}

interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-eor-vs-peo',
  imports: [CommonModule, FormsModule, RouterLink, Footer, Navbar],
  templateUrl: './eor-vs-peo.html',
  styleUrl: './eor-vs-peo.css',
})
export class EorVsPeo {
  // Search box
  searchTerm: string = '';

  // Comment form model
  commentForm = {
    name: '',
    email: '',
    comment: '',
  };

  // Sidebar recent posts
  recentPosts: RecentPost[] = [
    {
      image: 'assets/images/blog/top-recruitment-companies.jpg',
      title:
        'Top Recruitment Companies in India: How to Choose the Best for Your Hiring Needs',
      date: 'February 23, 2026',
      link: '/blog/top-recruitment-companies-in-India',
    },
    {
      image: 'assets/images/blog/leading-recruitment-company.jpg',
      title:
        'Nayan Tech: Leading Recruitment Company in India for Skilled Talent',
      date: 'February 19, 2026',
      link: '/blog/Nayan Tech-leading-recruitment-company',
    },
    {
      image: 'assets/images/blog/bridging-the-gap.jpg',
      title:
        'Building Strong Teams Through IT and Non-IT Staffing Expertise from Nayan Tech',
      date: 'January 22, 2026',
      link: '/blog/building-strong-teams-it-non-it-staffing',
    },
    {
      image: 'assets/images/blog/business-trusted.jpg',
      title: 'Strengthening Your Workforce with Trusted Non-IT Staffing Services',
      date: 'January 13, 2026',
      link: '/blog/strengthening-your-workforce-non-it-staffing',
    },
    {
      image: 'assets/images/blog/partner-it-staffing.jpg',
      title: 'Building High-Performance Tech Teams with Expert IT Staffing',
      date: 'January 8, 2026',
      link: '/blog/building-high-performance-tech-teams',
    },
  ];

  // FAQ list
  faqs: Faq[] = [
    {
      question: '1. Is it easy for freshers to get IT jobs in India?',
      answer:
        'Yes. With the right skills and an optimized resume, freshers can get roles like IT support, QA testing, cloud intern, and junior developer.',
    },
    {
      question: '2. Do I need experience to get a job?',
      answer:
        'Not always. Many companies hire freshers and students through internships and entry-level openings.',
    },
    {
      question: '3. Which IT jobs are in demand in India?',
      answer:
        'Cloud, DevOps, cybersecurity, data analytics, software development, and test automation are highly in demand.',
    },
    {
      question: '4. How can Nayan Tech help me get placed?',
      answer:
        'Nayan Tech provides job-oriented training, resume building, mock interviews, and connects you with employers.',
    },
    {
      question: '5. What is the expected salary for freshers?',
      answer: 'Freshers typically earn a competitive entry-level salary, depending on role and city.',
    },
  ];

  onSearch(): void {
    console.log('Searching for:', this.searchTerm);
    // TODO: hook up to real search logic
  }

  onSubmitComment(): void {
    console.log('Comment submitted:', this.commentForm);
    // TODO: hook up to real comment submission logic
    this.commentForm = { name: '', email: '', comment: '' };
  }
}
