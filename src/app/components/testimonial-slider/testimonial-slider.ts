import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-slider.html',
  styleUrl: './testimonial-slider.css'
})
export class TestimonialSlider {

  testimonials = [

    {
      name: 'Rahul Sharma',
      role: 'Software Engineer',
      company: 'Google',
      image: 'assets/images/user1.jpg',
      review: 'HireHub made my job search simple. Within two weeks I received multiple interview opportunities and finally joined Google.',
      rating: 5
    },

    {
      name: 'Priya Reddy',
      role: 'QA Engineer',
      company: 'Infosys',
      image: 'assets/images/user2.jpg',
      review: 'Excellent recruitment platform with verified companies. The application process was smooth and transparent.',
      rating: 5
    },

    {
      name: 'Arjun Kumar',
      role: 'Angular Developer',
      company: 'Microsoft',
      image: 'assets/images/user3.jpg',
      review: 'Professional recruiters guided me throughout the hiring process. Highly recommended for freshers and experienced professionals.',
      rating: 5
    }

  ];

}
