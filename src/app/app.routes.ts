import { Routes } from '@angular/router';

import { HomeComponent } from '@Pages/home.component';
import { LoginComponent } from '@Pages/login.component';
import { ManagementComponent } from '@Pages/management.component';
import { canActivateManagement } from '@Guards/can-activate-management.guard';
import { RegisterComponent } from '@Pages/register.component';
import { RegisterUSerComponent } from '@Pages/register-user.component';
import { AgendComponent } from '@Pages/agend.component';
import { TeamComponent } from '@Pages/team.component';
import { ReportComponent } from '@Pages/report.component';
import { RegisterSiteComponent } from '@Pages/register-site.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [canActivateManagement],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'register-user',
    component: RegisterUSerComponent,
  },
  {
    path: 'register-site',
    component: RegisterSiteComponent,
  },
  {
    path: 'management',
    component: ManagementComponent,
  },
  {
    path: 'team',
    component: TeamComponent,
  },
  {
    path: 'agend',
    component: AgendComponent,
  },
  {
    path: 'report',
    component: ReportComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
