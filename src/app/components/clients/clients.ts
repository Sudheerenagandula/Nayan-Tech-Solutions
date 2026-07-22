import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

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
    { name: 'TCS',            src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tata_Consultancy_Services_Logo.svg' },
    { name: 'Infosys',        src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Infosys_logo.svg' },
    { name: 'Wipro',          src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Wipro_new_logo.svg' },
    { name: 'Accenture',      src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Accenture.svg' },
    { name: 'Cognizant',      src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cognizant_logo_2022.svg' },
    { name: 'Tech Mahindra',  src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tech_Mahindra_New_Logo.svg' },
    { name: 'EA',             src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Electronic-Arts-Logo.svg' },
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
