import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post, PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts!: Post[];
  showIds = false;

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
  }

  showIdsProgram() {
    this.router.navigate(['/posts'], {
      queryParams: { showIds: true },
      fragment: 'fragment-program'
    })
  }

}
