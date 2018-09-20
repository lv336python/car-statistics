import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {User} from "../models/user";
import {style} from "@angular/animations";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    returnUrl: string;

    loginGroup = new FormGroup({
        email: new FormControl('', [
            Validators.required,

        ]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(40),
        ])
    });

    toLogin() {
        this.auth_.toLogin(new User(this.loginGroup.controls['email'].value,
            this.loginGroup.controls['password'].value))
            .subscribe(
                res => {
                    this.router.navigate([this.returnUrl]);
                },
                err => {
                    let data_txt = (JSON.stringify(err));
                    let error_data = JSON.parse(data_txt);
                    document.getElementById('error').style.display = 'block';
                    document.getElementById('error').innerHTML = error_data.error.message
                },
            )
    }

    constructor(
        private auth_: AuthService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

}
