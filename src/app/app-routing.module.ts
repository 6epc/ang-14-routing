import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutExtraComponent } from './about-extra/about-extra.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { PostResolver } from './shared/post.resolver';

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent, canActivateChild: [AuthGuard],
    children: [
      { path: 'extra', component: AboutExtraComponent }
    ]
  },
  { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
  {
    path: 'posts/:id',
    component: PostComponent,
    resolve: {
      post: PostResolver
    }
  },
  { path: 'error', component: ErrorPageComponent },

  { path: '**', redirectTo: '/error' }// Always goes last one
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
