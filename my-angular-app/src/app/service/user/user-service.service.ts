import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { User } from 'src/app/model/user.model';

@Injectable()
export class UserService {
    public userDetailsCache: Observable<User>;

    constructor(private httpClient: HttpClient, private environment: Environment) { }

    public requestData(): Observable<any> {
        if (!this.userDetailsCache) {
            this.userDetailsCache = this.getUserData();
        }
        return this.userDetailsCache;
    }

    public getUserData(): Observable<any> {
        const USER_URL = this.environment.getApiUrl();
        return this.httpClient.get(USER_URL + 'data/user.json').pipe(
            map((response: any) => {
                return response as User;
            }),
            catchError(this.handleError)
        );
    }

    public handleError(error: any): Observable<any> {
        return throwError(error.message || error);
    }
}
