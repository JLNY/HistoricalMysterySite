import { Injectable } from '@angular/core';
import { IActivity } from '../types/activity';

@Injectable()
export class ActivityService {

    activities: IActivity[] = [];

    clap(articleid: number, userName: string) {
        const activity: IActivity = {
            timestamp: new Date(),
            articleId: articleid,
            userName,
            activityType: 'clap',
            direction: 1
        };
        this.activities.push(activity);
    }

    unClap(articleid: number, userName: string) {
        this.activities = this.activities.filter(activity => activity.articleId !== articleid || activity.userName !== userName);
    }

    userHasClapped(articleid: number, userName: string): boolean {
        return this.activities.some(x => x.articleId === articleid && x.userName === userName);
    }

}
