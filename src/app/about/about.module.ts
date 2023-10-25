import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutFormComponent } from './about-form/about-form.component';
import { AboutExtraComponent } from './about-extra/about-extra.component';


@NgModule({
  declarations: [
    AboutComponent,
    AboutFormComponent,
    AboutExtraComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
