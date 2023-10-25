import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import { AboutExtraComponent } from 'src/app/about/about-extra/about-extra.component';
import { AboutFormComponent } from 'src/app/about/about-form/about-form.component';
import { FormGuardGuard } from 'src/app/about/form-guard.guard';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,

    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'extra', component: AboutExtraComponent },
        ]
      },
      {
        path: 'form',
        component: AboutFormComponent,
        canDeactivate: [FormGuardGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
