import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { Cta } from '../../components/cta/cta';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    Footer,
    Cta
  ],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class Testimonials {

  testimonials = [
    {
      name: 'Rahul Verma',
      role: 'Software Engineer',
      image: 'assets/images/team1.jpg',
      rating: 5,
      message: 'NayanTech Solutions made my job search simple and stress-free. Within two weeks, I received multiple interview opportunities and secured my dream job.'
    },
    {
      name: 'Priya Sharma',
      role: 'UI/UX Designer',
      image: 'assets/images/team2.jpg',
      rating: 5,
      message: 'The recruitment team was supportive throughout the hiring process. Their guidance helped me prepare confidently for interviews.'
    },
    {
      name: 'Amit Kumar',
      role: 'HR Manager',
      image: 'assets/images/team3.jpg',
      rating: 5,
      message: 'NayanTech Solutions helped us hire qualified candidates quickly. The recruitment process was smooth, professional, and highly efficient.'
    },
    {
      name: 'Sneha Patel',
      role: 'Marketing Executive',
      image: 'assets/images/team4.jpg',
      rating: 5,
      message: 'I found a company that matched my career goals. I highly recommend NayanTech Solutions to anyone looking for new opportunities.'
    },
    {
      name: 'Vikram Singh',
      role: 'Full Stack Developer',
      image: 'assets/images/team1.jpg',
      rating: 5,
      message: 'Excellent service! The platform is easy to use, and the job recommendations matched my skills perfectly.'
    },
    {
      name: 'Neha Reddy',
      role: 'Recruitment Specialist',
      image: 'assets/images/team2.jpg',
      rating: 5,
      message: 'As an employer, NayanTech Solutions provided access to talented professionals and reduced our hiring time significantly.'
    }
  ];

}
