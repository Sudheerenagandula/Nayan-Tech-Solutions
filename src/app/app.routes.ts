import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Testimonials } from './pages/testimonials/testimonials';
import { Contact } from './pages/contact/contact';
import { OurClients } from './pages/our-clients/our-clients';
import { Resources } from './pages/resources/resources';
import { ResourcesBlog } from './pages/resources-blog/resources-blog';

import { GratuityCalculator } from './pages/gratuity-calculator/gratuity-calculator';
import { HrTemplates } from './pages/hr-templates/hr-templates';

export const routes: Routes = [

{
path:'',
component:Home
},

{
path:'about',
component:About
},


  {
    path: 'our-clients',
    component: OurClients
  },
  {
    path: 'resources',
    component: Resources
  },
  {
    path: 'resources/blog',
    component: ResourcesBlog
  },

  {
    path: 'resources/gratuity-calculator',
    component: GratuityCalculator
  },
  {
    path: 'resources/hr-templates',
    component: HrTemplates
  },
{
path:'services',
component:Services
},

{
path:'testimonials',
component:Testimonials
},

{
path:'contact',
component:Contact
},

{
path:'**',
redirectTo:''
}

];
