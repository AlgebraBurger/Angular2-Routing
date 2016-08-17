import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contacts/contact.component';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
     pathMatch: 'full'
    
  },
  {
    path: 'dashboard',  
    component: DashboardComponent
  },
  {
    path: 'contact',    
    component: ContactComponent
  },

];
export const routing = RouterModule.forRoot(appRoutes);