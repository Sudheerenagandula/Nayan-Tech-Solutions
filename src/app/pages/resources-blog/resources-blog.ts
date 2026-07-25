import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

interface BlogPost {
  excerpt: string;
  image: string;
  path: string;
}

@Component({
  selector: 'app-resources-blog',
  standalone: true,
  imports: [CommonModule, RouterLink, Navbar, Footer],
  templateUrl: './resources-blog.html',
  styleUrl: './resources-blog.css'
})
export class ResourcesBlog {
  posts: BlogPost[] = [
    {
      excerpt: 'Top Recruitment Companies in India: How to Choose the Best for Your Hiring Needs',
      image: '/reporting-at-desk.jpg',
      path: '/resources/blog/recruitment-trends'
    },
    {
      excerpt: 'Building Strong Teams Through IT and Non-IT Staffing Expertise from Nayan Tech.',
      image: '/people-in-the-off.jpg',
      path: '/resources/blog/it-non-it-staffing'
    },
    {
      excerpt: 'Strengthening Your Workforce with Trusted Non-IT Staffing Services',
      image: '/Tech-Team.jpg',
      path: '/resources/blog/remote-hiring'
    },
    {
      excerpt: 'Building High-Performance Tech Teams with Expert IT Staffing',
      image: 'blog/blog-recruitment-outsourcing.jpg',
      path: '/resources/blog/onboarding-checklist'
    },
    {
      excerpt: 'The IT Skills That Guarantee a Job in 2026: Nayan Tech\u2019s Must-Learn List',
      image: 'blog/blog-hr-outsourcing.jpg',
      path: '/resources/blog/payroll-compliance'
    },
    {
      excerpt: 'Study \u2192 Train \u2192 Get Placed: The Nayan Tech Roadmap to IT Jobs in India.',
      image: 'blog/blog-switching-staffing.jpg',
      path: '/resources/blog/eor-vs-peo'
    },
  ];
}
