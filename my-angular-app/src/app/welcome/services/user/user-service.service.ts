import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { Environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { Resolve } from '@angular/router';
import { delay } from 'rxjs/internal/operators';

@Injectable()
export class UserService implements Resolve<User> {
    public userDetailsCache: Observable<User>;

    constructor(private httpClient: HttpClient, private environment: Environment) { }

    public resolve() {
        /**
         * When I setTimeOut in getUserData() which is going to make an http call, and
         * get response after 5 seconds,   the route shall already have been resolved,
         * and if I try to get the data from route snapshot (Activated Route),  in the
         * component, it throws NullPointerException.
         */
        /**
         * As it throws NPE, prefer to subscribe to getUserData(), instaed of relying
         * on the resolver.?? (I think yes.)
         */
        return this.getUserData();
    }

    public requestData(): Observable<any> {
        if (!this.userDetailsCache) {
            this.userDetailsCache = this.getUserData();
        }
        return this.userDetailsCache;
    }

    public getUserData(): Observable<any> {
    /*
        const USER_URL = this.environment.getApiUrl();
        return this.httpClient.get(USER_URL).pipe(
            map((response: any) => {
                setTimeout(() => {
                    return response as User;
                }, 5000);
                
            }),
            catchError(this.handleError)
        );
    */
        return of(this.mockData).pipe(
            map((response: any) => {
                setTimeout(() => {
                    console.log('Response is-->', response);
                    return response as User;
                }, 5000);
                
            }),
            catchError(this.handleError)
        );
    }

    public handleError(error: any): Observable<any> {
        return throwError(error.message || error);
    }

    private mockData: User = {
        name: "Rahul",
        city: "Hyderabad",
        country: "India"
    }
}
