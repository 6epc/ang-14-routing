import { PostsService } from './../posts.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { Post } from '../posts.service';

@Injectable({ providedIn: 'root' })
export class PostResolver implements Resolve<Post> {
  constructor(private PostsService: PostsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Post> | Promise<Post> | Post {
    return of(this.PostsService.getById(+route.params['id'])!).pipe(delay(2000)); //return type:  Observable<Post>

    // return this.PostsService.getById(+route.params['id'])!;  //return type: Post
  }
}
