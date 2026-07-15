import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-companies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-companies.html',
  styleUrl: './top-companies.css'
})
export class TopCompanies {

  companies = [

    {
      name:'Google',
      jobs:125,
      logo:'assets/images/google.png'
    },

    {
      name:'Microsoft',
      jobs:98,
      logo:'assets/images/microsoft.png'
    },

    {
      name:'Amazon',
      jobs:140,
      logo:'assets/images/amazon.png'
    },

    {
      name:'Adobe',
      jobs:55,
      logo:'assets/images/adobe.png'
    },

    {
      name:'Infosys',
      jobs:180,
      logo:'assets/images/infosys.png'
    },

    {
      name:'TCS',
      jobs:250,
      logo:'assets/images/tcs.png'
    },

    {
      name:'Accenture',
      jobs:170,
      logo:'assets/images/accenture.png'
    },

    {
      name:'IBM',
      jobs:100,
      logo:'assets/images/ibm.png'
    }

  ];

}
