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
import { ManagementServices } from './pages/services/management-services/management-services';
import { EnterpriseSecuritySolutions } from './pages/services/enterprise-security-solutions/enterprise-security-solutions';
import { ItStaffing } from './pages/services/it-staffing/it-staffing';
import { NonItStaffing } from './pages/services/non-it-staffing/non-it-staffing';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'about',
    component: About
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
    path: 'services',
    component: Services
  },

  { path: 'services/management-services', component: ManagementServices },
  { path: 'services/enterprise-security-solutions', component: EnterpriseSecuritySolutions },
  { path: 'services/it-staffing', component: ItStaffing },
  { path: 'services/non-it-staffing', component: NonItStaffing },

  {
    path: 'testimonials',
    component: Testimonials
  },

  {
    path: 'contact',
    component: Contact
  },

  // WILDCARD MUST ALWAYS BE LAST
  {
    path: '**',
    redirectTo: ''
  },

];
