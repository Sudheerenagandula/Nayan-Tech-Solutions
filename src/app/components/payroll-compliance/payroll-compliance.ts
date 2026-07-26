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
  selector: 'app-payroll-compliance',
  imports: [CommonModule, FormsModule, RouterLink, Footer, Navbar],
  templateUrl: './payroll-compliance.html',
  styleUrl: './payroll-compliance.css',
})
export class PayrollCompliance {
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
      image: '/reporting-at-desk.jpg',
      title:
        'Top Recruitment Companies in India: How to Choose the Best for Your Hiring Needs',
      date: 'February 23, 2026',
      link: '/resources/blog/recruitment-trends',
    },
    {
      image: '/people-in-the-off.jpg',
      title:
        'Building Strong Teams Through IT and Non-IT Staffing Expertise from Nayan Tech',
      date: 'January 22, 2026',
      link: '/resources/blog/it-non-it-staffing',
    },
    {
      image: '/Tech-Team.jpg',
      title: 'Strengthening Your Workforce with Trusted Non-IT Staffing Services',
      date: 'January 13, 2026',
      link: '/resources/blog/remote-hiring',
    },
    {
      image: '/IT-team.jpg',
      title: 'Building High-Performance Tech Teams with Expert IT Staffing',
      date: 'January 8, 2026',
      link: '/resources/blog/onboarding-checklist',
    },
  ];

  // FAQ list
  faqs: Faq[] = [
    {
      question: '1: Which IT skills are most in demand in Sydney, India in 2026?',
      answer:
        'The most in-demand IT skills in Sydney, India include cloud computing, cybersecurity, software development, data analytics, artificial intelligence, and DevOps. These skills are highly valued by employers and frequently listed on IT job portals.',
    },
    {
      question: '2: Can learning IT skills really guarantee an IT job in Sydney India?',
      answer:
        'While no job can be 100% guaranteed, learning high-demand IT skills greatly increases your chances of securing an IT job in Sydney, India. Employers prefer candidates with practical skills, certifications, and hands-on experience.',
    },
    {
      question: '3: How can a job portal help me find IT jobs in Sydney?',
      answer:
        'A job portal helps you access the latest IT jobs, apply easily, track applications, and connect with recruiters. Reputed portals partnered with recruitment companies provide better visibility and faster responses.',
    },
    {
      question: '4: Why choose an IT recruitment company in Sydney India for job search?',
      answer:
        'An IT recruitment company in Sydney India understands local hiring trends and employer needs. Companies like Nayan Tech connect candidates with verified employers, provide interview support, and help match skills with the right job opportunities.',
    },
    {
      question: '5: Are certifications important for getting IT jobs in 2026?',
      answer:
        'Yes, certifications in cloud platforms, cybersecurity, data analytics, and software development add strong value to your profile. They help recruiters quickly assess your skills and improve your chances of getting shortlisted for IT jobs.',
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
