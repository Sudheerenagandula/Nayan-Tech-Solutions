import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechItem {
  name: string;
  logo?: string;
  icon?: string;
}
@Component({
  selector: 'app-testimonial-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-slider.html',
  styleUrl: './testimonial-slider.css'
})
export class TestimonialSlider {
techStack = [
  { name: 'Power BI', logo: 'https://manvision.net/wp-content/uploads/2025/08/Power-BI.webp' },
  { name: 'Microsoft', logo: 'https://manvision.net/wp-content/uploads/2025/08/Microsoft.webp' },
  { name: 'BIML', logo: 'https://manvision.net/wp-content/uploads/2025/08/Bi-ml.webp' },
  { name: 'Oracle', logo: 'https://manvision.net/wp-content/uploads/2025/08/ora-cle.webp' },
  { name: 'Looker', logo: 'https://manvision.net/wp-content/uploads/2025/08/loo-ker.webp' },
  { name: 'Microsoft Azure', logo: 'https://manvision.net/wp-content/uploads/2025/08/Microsoft-Azure.webp' },
  { name: 'Microsoft SQL Server', logo: 'https://manvision.net/wp-content/uploads/2025/08/Microsoft-SQL-Server.webp' },
  { name: 'AWS', logo: 'https://manvision.net/wp-content/uploads/2025/08/a-w-s.webp' },
  { name: 'My SQL', logo: 'https://manvision.net/wp-content/uploads/2025/08/my-sql.webp' },
  { name: 'SharePoint', logo: 'https://manvision.net/wp-content/uploads/2025/08/share-point.webp' },
  { name: 'Mongo DB', logo: 'https://manvision.net/wp-content/uploads/2025/08/Mongo-db.webp' },
  { name: 'Java', logo: 'https://manvision.net/wp-content/uploads/2025/08/JAVA.webp' },
  { name: 'Talend', logo: 'https://manvision.net/wp-content/uploads/2025/08/Talend.webp' },
  { name: 'Microsoft .NET', logo: 'https://manvision.net/wp-content/uploads/2025/08/Microsoft-.NET_.webp' },
  { name: 'Informatica', logo: 'https://manvision.net/wp-content/uploads/2025/08/informatica.webp' },
  { name: 'Google Cloud', logo: 'https://manvision.net/wp-content/uploads/2025/08/google-cloud.webp' },
  { name: 'Hadoop', logo: 'https://manvision.net/wp-content/uploads/2025/08/hadoop.webp' },
  { name: 'Crystal Reports', logo: 'https://manvision.net/wp-content/uploads/2025/08/Crystal-reports.webp' },
  { name: 'ServiceNow', logo: 'https://manvision.net/wp-content/uploads/2025/08/SERVICE-NOW.webp' },
  { name: 'Tableau', logo: 'https://manvision.net/wp-content/uploads/2025/08/tableau.webp' },
  { name: 'React', logo: 'https://manvision.net/wp-content/uploads/2025/08/react.webp' },
  { name: 'Angular JS', logo: 'https://manvision.net/wp-content/uploads/2025/08/angular-js.webp' },
  { name: 'Alteryx', logo: 'https://manvision.net/wp-content/uploads/2025/08/alter-yx.webp' },
  { name: 'IBM Cloud', logo: 'https://manvision.net/wp-content/uploads/2025/08/ibm-cloud.webp' },
  { name: 'Selenium', logo: 'https://manvision.net/wp-content/uploads/2025/08/Selenium.webp' },
  { name: 'Python', logo: 'https://manvision.net/wp-content/uploads/2025/08/python.webp' }
];

}
