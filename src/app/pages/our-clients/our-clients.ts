import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";

interface ClientLogo {
  name: string;
  logo: string;
}

interface OfficeLocation {
  city: string;
  tag: string;
  phone: string;
  address: string;
  icon: string;
}

@Component({
  selector: 'app-our-clients',
  standalone: true,
  imports: [CommonModule, RouterLink, Footer, Navbar],
  templateUrl: './our-clients.html',
  styleUrl: './our-clients.css'
})
export class OurClients implements AfterViewInit, OnDestroy {

  // ---------- HERO ----------
  heroHeadline = 'Our clients select us because of our agile work practices and the transparency of our teams';
  heroSubtext = 'Trusted by over 2,000+ Businesses and 30+ Government Entities across the UAE';
  heroImage = '/diverse-team-meeting-stockcake.jpg';

  navLinks = [
    { label: 'SERVICES', path: '/services' },
    { label: 'ABOUT', path: '/about' },
    { label: 'CAREERS', path: '/careers' },
    { label: 'OUR CLIENTS', path: '/our-clients' },
    { label: 'RESOURCES', path: '/resources' },
    { label: 'CONTACT', path: '/contact' }
  ];
clients: ClientLogo[] = [
 { name: 'ETIHAD',                          logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Etihad-airways-logo.svg' },

  // ---- IT MNCs ----
  { name: 'TCS',                             logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tata_Consultancy_Services_Logo.svg' },
  { name: 'Infosys',                         logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Infosys_logo.svg' },
  { name: 'Wipro',                           logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Wipro_new_logo.svg' },
  { name: 'Accenture',                       logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Accenture.svg' },
  { name: 'Cognizant',                       logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cognizant_logo_2022.svg' },
{ name: 'Tech Mahindra',  logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tech_Mahindra_New_Logo.svg' },
  { name: 'EA',             logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Electronic-Arts-Logo.svg' },
  // ---- Electronics ----
 { name: 'Mivi',       logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mivi_Logo.png' },
{ name: 'Noise',      logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Noise_Logo.png' },
{ name: 'boAt',       logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Boat_Logo.webp' },
{ name: 'Zebronics', logo: 'https://zebronics.com/cdn/shop/files/zeb_logo_300x90_bdd0012a-8b0e-41dc-88e4-229756f41a78.png' },
{ name: 'JBL', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/JBL_logo.svg' },

// ---- Real Estate (India / Telangana) ----
  { name: 'Prestige Group',      logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Prestige_Group.png' },
  { name: 'Godrej Properties',   logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Godrej_Logo.svg' },
  { name: 'Sobha Limited',       logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sobha_logo.JPG' },

  { name: 'My Home Group',        logo: 'https://www.myhomeconstructions.com/wp-content/themes/sdna/logo.png' },
  { name: 'Aparna Constructions', logo: 'https://d2tdzhum1kggza.cloudfront.net/website/aparna-logo.svg' },// Telangana-based, not on Commons
{ name: 'JSR Group SunCity', logo: 'https://www.jsrgroupsuncity.com/img/logos/JSR-Group-Suncity-Logo-2022.png' },
 // ---- Banks (India) ----
  { name: 'Citibank',                        logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Citi.svg' },
  { name: 'HDFC Bank',                       logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/HDFC_Bank_Logo.svg' },
  { name: 'ICICI Bank',                      logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/ICICI_Bank_Logo.svg' },
  { name: 'State Bank of India',             logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/SBI-logo.svg' },
{ name: 'Axis Bank', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Axis_Bank_logo.svg' },
];

  ctaHeadline = 'Experience the difference in reliability and service excellence';
  ctaButtonLabel = 'Book a consultation';
  ctaButtonPath = '/contact';

  footerHeadline = 'We want to hear about what you\u2019re building';
  footerBlurb = 'Across industries and the globe, we help businesses achieve their goals.';
  contactEmail = 'nayantechsolutions@gmail.com';

  offices: OfficeLocation[] = [
    {
      city: 'Dubai',
      tag: '(HQ)',
      phone: '+971 4 354 4466',
      address: 'Office 1006, 10th Floor, Marina Plaza, Dubai Marina, Dubai, UAE',
      icon: '/assets/icons/dubai-skyline.svg'
    },
    {
      city: 'Abu Dhabi',
      tag: '(Branch Office)',
      phone: '+971 2 444 6677',
      address: 'Office 1402, 14th Floor, Three Sails Tower, Al Bateen, Abu Dhabi, UAE',
      icon: '/assets/icons/abu-dhabi-skyline.svg'
    }
  ];

  jafzaOffice = {
    label: 'JAFZA Branch Office',
    address: 'Office No. B712, Tower B, JAFZA One, Jabel Ali Freezone, Dubai, UAE'
  };

  currentYear = new Date().getFullYear();

  // ---------- LOGO FALLBACK (monogram badge) ----------
  brokenLogos = new Set<string>();

  private badgePalette = [
    '#0a1a3a', '#1d4ed8', '#0f2249', '#2563eb', '#1e3a8a', '#3b5bdb'
  ];

  onLogoError(name: string) {
    this.brokenLogos.add(name);
  }

  getInitials(name: string): string {
    const words = name.replace(/[^a-zA-Z\s]/g, '').trim().split(/\s+/);
    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    }
    return (words[0][0] + words[1][0]).toUpperCase();
  }

  getBadgeColor(name: string): string {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % this.badgePalette.length;
    return this.badgePalette[index];
  }

  // ---------- SCROLL REVEAL ----------
  @ViewChildren('revealEl') revealEls!: QueryList<ElementRef>;
  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    this.revealEls.forEach(el => this.observer.observe(el.nativeElement));
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
