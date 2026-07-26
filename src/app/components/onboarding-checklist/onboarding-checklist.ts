import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

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
  selector: 'app-onboarding-checklist',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, Navbar, Footer],
  templateUrl: './onboarding-checklist.html',
  styleUrl: './onboarding-checklist.css',
})
export class OnboardingChecklist {
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
      question: '1. What specific IT Staffing Services in Sydney does Nayan Tech offer?',
      answer:
        'Nayan Tech provides a comprehensive range of staffing solutions tailored to the Sydney market. This includes permanent recruitment for long-term roles, contract staffing for project-based needs, and executive search for leadership positions. They specialize in finding talent for Software Development, Cloud Computing, DevOps, Data Analytics, and Cybersecurity.',
    },
    {
      question: '2. How does Nayan Tech ensure the quality of IT candidates?',
      answer:
        'Unlike generalist agencies, Nayan Tech uses a rigorous, multi-layered screening process. This involves deep technical assessments often conducted by subject matter experts, behavioral interviews to assess cultural fit, and thorough background checks. Their background as a technology consulting firm allows them to validate technical claims more accurately than standard recruiters.',
    },
    {
      question: '3. Why should I choose Nayan Tech over other recruitment agencies in Sydney?',
      answer:
        'Nayan Tech stands out because they combine local market expertise with global reach. Based in Bella Vista, they understand the Sydney business culture, but their global network allows them to source hard-to-find skills that may be scarce locally. Additionally, their "Study → Train → Get Placed" program ensures they have a continuous pipeline of upskilled, job-ready talent.',
    },
    {
      question: '4. Can Nayan Tech help with rapid scaling for large projects?',
      answer:
        'Yes, Nayan Tech excels at volume hiring for large-scale digital transformation projects. Their database of pre-vetted "warm" candidates allows them to assemble full project teams (e.g., a squad of developers, a scrum master, and a QA tester) in a fraction of the time it would take to hire them individually.',
    },
    {
      question: '5. Does Nayan Tech support businesses outside of Sydney?',
      answer:
        'While they are a leading provider of IT Staffing Services in Sydney, Nayan Tech operates across India and globally (including New Zealand, USA, and Canada). They have the infrastructure to support remote teams and place candidates in major cities like Melbourne, Brisbane, and Perth, ensuring consistent quality regardless of location.',
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
