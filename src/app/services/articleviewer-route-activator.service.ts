import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ArticleService } from './article.service';

@Injectable()
export class ArticleViewerRouteActivator {

    constructor(private articleService: ArticleService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot) {
        const articleExists = !!this.articleService.getStory(route.params.articleid);

        if (!articleExists) {
            this.router.navigate(['/404']);
        }
        return articleExists;
    }
}
