import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { Navbar } from "../navbar/navbar";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


interface RecentPost {
  title: string;
  image: string;
  date: string;
  path: string;
}

@Component({
  selector: 'app-recruitment-trends',
  imports: [CommonModule, FormsModule, RouterLink, Navbar, Footer],
  templateUrl: './recruitment-trends.html',
  styleUrl: './recruitment-trends.css',
})
export class RecruitmentTrends {
    searchTerm = '';

  recentPosts: RecentPost[] = [
    {
      title: 'Top Recruitment Companies in India: How to Choose the Best for Your Hiring Needs',
      image: 'blog/blog-pro-services.jpg',
      date: 'July 20, 2026',
      path: '/resources/blog/recruitment-trends'
    },
    {
      title: 'Building Strong Teams Through IT and Non-IT Staffing Expertise',
      image: 'blog/blog-employee-retention.jpg',
      date: 'July 15, 2026',
      path: '/resources/blog/it-non-it-staffing'
    },
    {
      title: 'Strengthening Your Workforce with Trusted Non-IT Staffing Services',
      image: 'blog/blog-top-hr-companies.jpg',
      date: 'July 10, 2026',
      path: '/resources/blog/remote-hiring'
    },
    {
      title: 'The IT Skills That Guarantee a Job in 2026',
      image: 'blog/blog-hr-outsourcing.jpg',
      date: 'July 5, 2026',
      path: '/resources/blog/payroll-compliance'
    },
  ];

  comment = { name: '', email: '', message: '' };

  submitComment() {
    // Wire this up to your backend/API when ready
    console.log('Comment submitted:', this.comment);
    this.comment = { name: '', email: '', message: '' };
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
