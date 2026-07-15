import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css'
})
export class Categories {

  categories = [
    {
      title: 'Software Development',
      jobs: 245,
      icon: 'bi bi-code-slash',
      color: 'primary'
    },
    {
      title: 'QA & Testing',
      jobs: 120,
      icon: 'bi bi-bug',
      color: 'success'
    },
    {
      title: 'UI / UX Design',
      jobs: 80,
      icon: 'bi bi-palette',
      color: 'warning'
    },
    {
      title: 'Cloud Computing',
      jobs: 95,
      icon: 'bi bi-cloud',
      color: 'info'
    },
    {
      title: 'Data Science',
      jobs: 140,
      icon: 'bi bi-bar-chart',
      color: 'danger'
    },
    {
      title: 'Cyber Security',
      jobs: 65,
      icon: 'bi bi-shield-lock',
      color: 'dark'
    },
    {
      title: 'Digital Marketing',
      jobs: 110,
      icon: 'bi bi-megaphone',
      color: 'secondary'
    },
    {
      title: 'Human Resources',
      jobs: 75,
      icon: 'bi bi-people',
      color: 'primary'
    }
  ];

}
