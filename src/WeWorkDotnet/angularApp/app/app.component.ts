import { Component } from '@angular/core';
import { Router } from '@angular/router';

// AoT compilation doesn't support 'require'.
import './app.component.scss';
import '../style/app.scss';
import '../style/theme.scss';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    routes: Object[] = [{
        title: 'Dashboard',
        route: '/',
        icon: 'dashboard',
    }, {
        title: 'Product Dashboard',
        route: '/product',
        icon: 'view_quilt',
    }, {
        title: 'Product Logs',
        route: '/logs',
        icon: 'receipt',
    }, {
        title: 'Manage Users',
        route: '/users',
        icon: 'people',
    }, {
        title: 'Covalent Templates',
        route: '/templates',
        icon: 'view_module',
    },
    ];

    constructor(private router: Router) { }

    signout(): void {
        //this.authenticationService.signout();
        this.router.navigate(['/home']);
    }
}