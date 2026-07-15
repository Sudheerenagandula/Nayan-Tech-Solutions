import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { Cta } from '../../components/cta/cta';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    Footer,
    Cta
  ],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {

  services = [
    {
      icon: 'bi bi-person-workspace',
      title: 'Job Placement',
      description: 'We connect talented professionals with leading companies across various industries, helping candidates find the right career opportunities.'
    },
    {
      icon: 'bi bi-people-fill',
      title: 'Recruitment Solutions',
      description: 'Our recruitment experts help businesses hire skilled professionals quickly and efficiently through a streamlined hiring process.'
    },
    {
      icon: 'bi bi-file-earmark-person',
      title: 'Resume Building',
      description: 'Professional resume writing and profile enhancement services to improve your chances of getting shortlisted.'
    },
    {
      icon: 'bi bi-mortarboard-fill',
      title: 'Career Guidance',
      description: 'Receive expert career counseling, interview preparation, and personalized advice to achieve your professional goals.'
    },
    {
      icon: 'bi bi-search',
      title: 'Talent Search',
      description: 'Organizations can discover qualified candidates using our advanced talent search and recruitment platform.'
    },
    {
      icon: 'bi bi-graph-up-arrow',
      title: 'Workforce Consulting',
      description: 'We provide workforce planning and HR consulting services to help organizations build high-performing teams.'
    }
  ];

}
