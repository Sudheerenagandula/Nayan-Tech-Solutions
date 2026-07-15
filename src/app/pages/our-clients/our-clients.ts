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
    { name: 'ERES',                            logo: '/assets/clients/eres.png' },
    { name: 'FARFETCH',                        logo: '/assets/clients/farfetch.png' },
    { name: 'DeLonghi',                        logo: '/assets/clients/delonghi.png' },
    { name: 'EXPRO',                           logo: '/assets/clients/expro.png' },
    { name: 'ETIHAD',                          logo: '/assets/clients/etihad.png' },
    { name: 'Roche',                           logo: '/assets/clients/roche.png' },
    { name: 'Killa Design',                    logo: '/assets/clients/killa-design.png' },
    { name: 'GILEAD',                          logo: '/assets/clients/gilead.png' },
    { name: 'informa',                         logo: '/assets/clients/informa.png' },
    { name: 'Majid Al Futtaim',                logo: '/assets/clients/majid-al-futtaim.png' },
    { name: 'Porsche',                         logo: '/assets/clients/porsche.png' },
    { name: 'Keysight',                        logo: '/assets/clients/keysight.png' },
    { name: 'British Oak Montessori Nursery',  logo: '/assets/clients/british-oak.png' },
    { name: 'Wilhelmsen',                      logo: '/assets/clients/wilhelmsen.png' },
    { name: 'Chanel',                          logo: '/assets/clients/chanel.png' }
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
