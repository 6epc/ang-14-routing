import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd, ResolveStart, Router } from '@angular/router';
import { Post, PostsService } from '../posts.service';
import { Observable, filter, map, merge } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts!: Post[];
  showIds = false;

  hideLoader!: Observable<boolean>;
  showLoader!: Observable<boolean>;
  isLoading!: Observable<boolean>;

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.posts = this.postsService.posts;
    this.activatedRoute.queryParams.subscribe(params => {
      this.showIds = !!params['showIds'];
      console.log(params);
    })

    this.hideLoader = this.router.events.pipe(filter((e:any) => e instanceof ResolveEnd), map(e => false));
    this.showLoader = this.router.events.pipe(filter((e:any) => e instanceof ResolveStart), map(e => true));
    this.isLoading = merge(this.hideLoader, this.showLoader);
  }

  showIdsProgram() {
    this.router.navigate(['/posts'], {
      queryParams: { showIds: true },
      fragment: 'fragment-program'
    })
  }

}
