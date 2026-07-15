import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-jobs.html',
  styleUrl: './featured-jobs.css'
})
export class FeaturedJobs {

  jobs = [

    {
      company:'Google',
      title:'Frontend Developer',
      location:'Hyderabad',
      salary:'₹8 - 12 LPA',
      experience:'2+ Years',
      type:'Full Time',
      logo:'assets/images/google.png'
    },

    {
      company:'Microsoft',
      title:'Java Full Stack Developer',
      location:'Bangalore',
      salary:'₹12 - 18 LPA',
      experience:'1+ Years',
      type:'Remote',
      logo:'assets/images/microsoft.png'
    },

    {
      company:'Amazon',
      title:'QA Engineer',
      location:'Chennai',
      salary:'₹7 - 10 LPA',
      experience:'Fresher',
      type:'Hybrid',
      logo:'assets/images/amazon.png'
    },

    {
      company:'Infosys',
      title:'Angular Developer',
      location:'Pune',
      salary:'₹6 - 9 LPA',
      experience:'2 Years',
      type:'Full Time',
      logo:'assets/images/infosys.png'
    },

    {
      company:'TCS',
      title:'Backend Developer',
      location:'Mumbai',
      salary:'₹10 - 15 LPA',
      experience:'3 Years',
      type:'Remote',
      logo:'assets/images/tcs.png'
    },

    {
      company:'Adobe',
      title:'UI UX Designer',
      location:'Noida',
      salary:'₹8 - 14 LPA',
      experience:'2 Years',
      type:'Hybrid',
      logo:'assets/images/adobe.png'
    }

  ];

}
