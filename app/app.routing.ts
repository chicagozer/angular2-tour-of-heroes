import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { CodesComponent } from './codes.component';
import { CodeDetailComponent } from './code-detail.component';

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
    path: 'detail/:id',
    component: CodeDetailComponent
  },
  {
    path: 'codes',
    component: CodesComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [DashboardComponent, CodesComponent, CodeDetailComponent];
