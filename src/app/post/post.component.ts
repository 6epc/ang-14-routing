import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post, PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post!: Post;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    //This way of geting data(using resolver and snapshot) is not ok, cause snapshot is a static method
    // it does not use dinamyc data.
    // this.post = this.activatedRoute.snapshot.data['post'];

    //This is the way to get same result as below, using resolver and activatedRoute.data
    // In this case: data['post'] - is  resolve: {post: PostResolver} from app-routing
    // !Note Resolver gives us Opportunity to process the data before triggering routing
    // !Note If there is an asyn operation to retrieve data, it will be done first, and then the routing will be triggered. And with the existing data we will see a working page.
    // this.activatedRoute.data.subscribe(data => this.post = data['post'])

    this.activatedRoute.data.subscribe(({post}) => this.post = post);

    //It is better to use observable then snapshot cause of dinamyc in observable
    // this.activatedRoute.params.subscribe(params => {
    //   this.post = this.postsService.getById(+params['id'])!;
    // })
  }

  backToPosts() {
    this.router.navigate(['/posts']);
  }

  loadPost() {
    this.router.navigate(['posts', 44]);
  }

}
