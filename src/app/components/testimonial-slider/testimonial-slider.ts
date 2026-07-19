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

  techStack = [
    { name: 'Talend', logo: 'https://cdn.simpleicons.org/talend/ffffff' },
    { name: 'Microsoft .NET', logo: 'https://cdn.simpleicons.org/dotnet/ffffff' },
    { name: 'Informatica', icon: 'bi-diagram-3' },
    { name: 'Google Cloud', logo: 'https://cdn.simpleicons.org/googlecloud/ffffff' },
    { name: 'Hadoop', logo: 'https://cdn.simpleicons.org/apachehadoop/ffffff' },
    { name: 'Crystal Reports', icon: 'bi-file-earmark-bar-graph' },
    { name: 'ServiceNow', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/servicenow.svg' },
    { name: 'Tableau', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/tableau.svg' },
    { name: 'React', logo: 'https://cdn.simpleicons.org/react/ffffff' },
    { name: 'Angular JS', logo: 'https://cdn.simpleicons.org/angular/ffffff' },
    { name: 'Alteryx', logo: 'https://cdn.simpleicons.org/alteryx/ffffff' },
    { name: 'IBM Cloud', logo: 'https://cdn.simpleicons.org/ibm/ffffff' },
    { name: 'Selenium', logo: 'https://cdn.simpleicons.org/selenium/ffffff' },
    { name: 'Python', logo: 'https://cdn.simpleicons.org/python/ffffff' },
    { name: 'Power BI', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/powerbi.svg' },
    { name: 'Microsoft', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/microsoft.svg' },
    { name: 'BIML', icon: 'bi-code-square' },
    { name: 'Oracle', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/oracle.svg' },
    { name: 'Looker', logo: 'https://cdn.simpleicons.org/looker/ffffff' },
    { name: 'Microsoft Azure', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/microsoftazure.svg' },
    { name: 'Microsoft SQL Server', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/microsoftsqlserver.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/amazonaws.svg' },
    { name: 'My SQL', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/mysql.svg' },
    { name: 'SharePoint', icon: 'bi-microsoft' },
    { name: 'Mongo DB', logo: 'https://cdn.simpleicons.org/mongodb/ffffff' },
    { name: 'Java', logo: 'https://cdn.simpleicons.org/openjdk/ffffff' }
  ];

}
