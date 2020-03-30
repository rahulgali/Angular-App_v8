import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/home/services/user/user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public hasPageError: boolean = false;
    public data: any;

    constructor(private userService: UserService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.userService.getUserData().subscribe(
            (response) => {
                this.data = response;
                // console.log('Response in component-->', response);
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