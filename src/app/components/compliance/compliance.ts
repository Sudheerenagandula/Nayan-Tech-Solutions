import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compliance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compliance.html',
  styleUrl: './compliance.css'
})
export class Compliance {
  eyebrow = 'OUR BENEFITS';
  heading = 'Why Choose Us';

  paragraphs: string[] = [
    'In the era of digital transformation, businesses must modernize their strategies, make IT investment a priority, and evolve with the technology so that companies can scale. At Manvision, we have the right consulting in your modernization efforts and ensure technology aligns with business goals.',
    'Manvision analyzes the trends in the market, disruptions, and technology evolution and recommends the best solution. In addition, we help industry verticals like education, banking, retail, healthcare, banking, energy, logistics, etc., to realize ROI through IT consulting, managed services, and cybersecurity.'
  ];

  imageSrc = '/Compl.jpg';
  imageAlt = 'Team collaborating around a table';
}
