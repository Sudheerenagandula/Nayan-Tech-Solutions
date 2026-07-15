import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

interface BlogPost {
  date: any;
  title: string;
  excerpt: string;
  category: string;
  slug: string;
  image: string;
}

@Component({
  selector: 'app-resources-blog',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './resources-blog.html',
  styleUrl: './resources-blog.css'
})
export class ResourcesBlog {
  posts: BlogPost[] = [
    {
      category: 'HR Matters',
      title: 'What are PRO Services and How They Can Benefit Your Business in the UAE',
      excerpt: 'Discover how PRO services in the UAE simplify government approvals, ensure compliance, and save your business time and effort.',
      slug: 'what-are-pro-services-uae',
      image: 'blog/blog-pro-services.jpg',
      date: 'July 10, 2026'
    },
    {
      category: 'HR Matters',
      title: '8 Proven Employee Retention Strategies for UAE Companies in 2026',
      excerpt: 'Learn expert strategies for employee retention in the UAE. Boost engagement, reduce turnover, and build a loyal workforce.',
      slug: '8-employee-retention-strategies-uae-2026',
      image: 'blog/blog-employee-retention.jpg',
      date: 'July 5, 2026'
    },
    {
      category: 'HR Matters',
      title: 'Top 8 Best HR Companies in the UAE in 2026',
      excerpt: 'Discover the best HR companies in the UAE in 2026.',
      slug: 'top-8-hr-companies-uae-2026',
      image: 'blog/blog-top-hr-companies.jpg',
      date: 'June 28, 2026'
    },
    {
      category: 'Recruitment',
      title: '7 Key Benefits of Outsourcing Recruitment in the UAE',
      excerpt: 'Discover the key benefits of outsourcing recruitment in the UAE, from compliance and cost savings to faster access to top talent.',
      slug: '7-benefits-outsourcing-recruitment-uae',
      image: 'blog/blog-recruitment-outsourcing.jpg',
      date: 'June 20, 2026'
    },
    {
      category: 'HR Matters',
      title: 'HR Outsourcing in the GCC: When It Makes Sense & When It Doesn\'t',
      excerpt: 'A practical guide to HR outsourcing in the GCC. Learn when it helps, when it doesn\'t, and how to decide for your business.',
      slug: 'hr-outsourcing-gcc-when-it-makes-sense',
      image: 'blog/blog-hr-outsourcing.jpg',
      date: 'June 12, 2026'
    },
    {
      category: 'Staffing',
      title: 'Switching Staffing Partners in the UAE: What You Need to Know',
      excerpt: 'Thinking of switching staffing partners in the UAE? Learn when to switch, how to choose the right one, and what to watch for.',
      slug: 'switching-staffing-partners-uae',
      image: 'blog/blog-switching-staffing.jpg',
      date: 'June 5, 2026'
    },
    {
      category: 'HR Matters',
      title: 'What are PRO Services and How They Can Benefit Your Business in the UAE',
      excerpt: 'Discover how PRO services in the UAE simplify government approvals, ensure compliance, and save your business time and effort.',
      slug: 'what-are-pro-services-uae',
      image: 'blog/blog-pro-services.jpg',
      date: 'May 29, 2026'
    },
    {
      category: 'HR Matters',
      title: '8 Proven Employee Retention Strategies for UAE Companies in 2026',
      excerpt: 'Learn expert strategies for employee retention in the UAE. Boost engagement, reduce turnover, and build a loyal workforce.',
      slug: '8-employee-retention-strategies-uae-2026',
      image: 'blog/blog-employee-retention.jpg',
      date: 'May 20, 2026'
    },
    {
      category: 'HR Matters',
      title: 'Top 8 Best HR Companies in the UAE in 2026',
      excerpt: 'Discover the best HR companies in the UAE in 2026.',
      slug: 'top-8-hr-companies-uae-2026',
      image: 'blog/blog-top-hr-companies.jpg',
      date: 'May 12, 2026'
    }
  ];
}
