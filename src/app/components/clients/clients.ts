import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ClientLogo {
  name: string;
  src: string;
}

const LOGO_DEV_TOKEN = 'pk_YOUR_PUBLIC_TOKEN'; // ⚠️ replace with your real token from logo.dev

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.html',
  styleUrls: ['./clients.css']
})
export class ClientsComponent {
  private baseLogos: ClientLogo[] = [
    { name: 'Tata Consultancy Services', src: `https://img.logo.dev/tcs.com?token=${LOGO_DEV_TOKEN}` },
    { name: 'Wipro', src: `https://img.logo.dev/wipro.com?token=${LOGO_DEV_TOKEN}` },
    { name: 'Citibank', src: `https://img.logo.dev/citibank.com?token=${LOGO_DEV_TOKEN}` },
    { name: 'Tech Mahindra', src: `https://img.logo.dev/techmahindra.com?token=${LOGO_DEV_TOKEN}` },
    { name: 'Electronic Arts', src: `https://img.logo.dev/ea.com?token=${LOGO_DEV_TOKEN}` },
    { name: 'Acclaris', src: `https://img.logo.dev/acclaris.com?token=${LOGO_DEV_TOKEN}` }
  ];

  logos: ClientLogo[] = [...this.baseLogos, ...this.baseLogos];

  private readonly placeholder = '/public/icons/placeholder.svg';

  onImgError(event: Event, logo: ClientLogo): void {
    const img = event.target as HTMLImageElement;
    if (img.src.includes(this.placeholder)) {
      return; // already showing the placeholder — stop, don't loop
    }
    img.src = this.placeholder;
    console.warn(`Logo failed to load, using placeholder: ${logo.name}`);
  }
}
