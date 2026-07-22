import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { Clients } from "../../components/clients/clients";
import { Services } from "../../components/services/services";
import { Statistics } from "../../components/statistics/statistics";
import { Compliance } from "../../components/compliance/compliance";
import { Blog } from "../../components/blog/blog";
import { TestimonialSlider } from "../../components/testimonial-slider/testimonial-slider";
import { CareersTeaser } from "../../components/careers-teaser/careers-teaser";
import { FaqComponent } from "../../components/faq/faq";
import { Cta } from "../../components/cta/cta";
import { Footer } from "../../components/footer/footer";
import { Navbar } from '../../components/navbar/navbar';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Hero, Clients, Services, Statistics, Compliance, Blog, TestimonialSlider, CareersTeaser,  Cta, Footer, FaqComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
