import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user/user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
    public hasPageError: boolean = false;
    public data: any;

    constructor(private userService: UserService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.userService.getUserData().subscribe(
            (response) => { 
                this.data = response;
                console.log('Response in component-->', response);
            },
            (error) => {
                this.hasPageError = true;
                console.log(error);
            }
        );
        // Used with Resolver approach.
        // this.data = this.route.snapshot.data.userService;
    }

}
