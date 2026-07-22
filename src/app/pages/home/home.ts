import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import {  ClientsComponent } from "../../components/clients/clients";
import { Services } from "../../components/services/services";
import { Statistics } from "../../components/statistics/statistics";
import { ComplianceComponent } from "../../components/compliance/compliance";
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
  imports: [Navbar, Hero,  Services, Statistics, Blog, TestimonialSlider, CareersTeaser, Cta, Footer, FaqComponent, ComplianceComponent, ClientsComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
