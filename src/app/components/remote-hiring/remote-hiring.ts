import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";

interface RecentPost {
  image: string;
  title: string;
  date: string;
  link: string;
}

@Component({
  selector: 'app-remote-hiring',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, Navbar, Footer],
  templateUrl: './remote-hiring.html',
  styleUrl: './remote-hiring.css',
})
export class RemoteHiring {
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

  // FAQ accordion state
  faqs = [
    {
      question:
        "1. What types of roles are covered under Nayan Tech's Non-IT Staffing Services in Sydney?",
      answer:
        'Our services are comprehensive. We cover a wide range of operational roles including Administration (Receptionists, EAs), Finance (Payroll, Accounts), Sales & Marketing, Human Resources, Customer Service, and Supply Chain/Logistics. We cater to white-collar professional roles across various industries.',
    },
    {
      question: '2. Can Nayan Tech help with temporary or contract staffing for seasonal peaks?',
      answer:
        'Absolutely. We understand that business needs fluctuate. Whether you need extra customer support staff for the holiday season or temporary administrators to cover maternity leave, our Non-IT Staffing Services in Sydney offer flexible contract and temporary solutions to keep your business running smoothly.',
    },
    {
      question: '3. How does Nayan Tech vet candidates for non-technical roles?',
      answer:
        'We look beyond the resume. Since non-IT roles often rely heavily on soft skills, we conduct behavioral interviews to assess communication, organization, and problem-solving abilities. We also perform rigorous reference checks and background verifications to ensure every candidate we place is reliable and trustworthy.',
    },
    {
      question: '4. Does Nayan Tech only work with large enterprises?',
      answer:
        'No, we work with businesses of all sizes. From small startups in Bella Vista needing their first Office Manager to large corporations in the Sydney CBD requiring a full team of Customer Service agents, our staffing solutions are scalable to fit your specific budget and requirements.',
    },
    {
      question: '5. Why should I use an agency for Non-IT roles instead of hiring directly?',
      answer:
        'Hiring directly can be time-consuming and often results in a flood of unqualified applications. Using Nayan Tech\'s Non-IT Staffing Services in Sydney saves you time by filtering out unsuitable candidates. We give you access to a "hidden talent pool" of passive candidates and handle the administrative burden of screening, allowing you to interview only the best talent.',
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
