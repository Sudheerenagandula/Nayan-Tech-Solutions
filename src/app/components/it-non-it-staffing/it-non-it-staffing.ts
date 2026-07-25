import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Footer } from "../footer/footer";
import { Navbar } from "../navbar/navbar";

interface Comment {
  name: string;
  email: string;
  message: string;
}

interface RecentPost {
  title: string;
  image: string;
  path: string;
  date: string;
}

@Component({
  selector: 'app-it-non-it-staffing',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, Footer, Navbar],
  templateUrl: './it-non-it-staffing.html',
  styleUrl: './it-non-it-staffing.css',
})
export class ItNonItStaffing {
  searchTerm = '';

  comment: Comment = {
    name: '',
    email: '',
    message: '',
  };

  recentPosts: RecentPost[] = [
    {
      title: 'Top Recruitment Companies in Australia: How to Choose the Best for Your Hiring Needs',
      image: 'blog/blog-top-recruitment-companies-australia.jpg',
      path: '/blog/top-recruitment-companies-australia',
      date: 'February 23, 2026',
    },
    {
      title: 'Nayan Tech Solutions: Leading Recruitment Company in Australia for Skilled Talent',
      image: 'blog/blog-connecting-excellence-recruitment-solutions.jpg',
      path: '/blog/connecting-excellence-recruitment-solutions',
      date: 'February 19, 2026',
    },
    {
      title: 'Building Strong Teams Through IT and Non-IT Staffing Expertise from Nayan Tech Solutions',
      image: 'blog/blog-it-non-it-staffing-sydney.jpg',
      path: '/blog/it-non-it-staffing',
      date: 'January 22, 2026',
    },
    {
      title: 'Strengthening Your Workforce with Trusted Non-IT Staffing Services',
      image: 'blog/blog-non-it-staffing-services.jpg',
      path: '/blog/non-it-staffing-services',
      date: 'January 13, 2026',
    },
    {
      title: 'Building High-Performance Tech Teams with Expert IT Staffing',
      image: 'blog/blog-it-staffing-sydney.jpg',
      path: '/blog/it-staffing-sydney',
      date: 'January 8, 2026',
    },
  ];

  submitComment(): void {
    if (!this.comment.name || !this.comment.email) {
      return;
    }

    console.log('Comment submitted:', this.comment);

    // Reset the form after submission
    this.comment = { name: '', email: '', message: '' };
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
