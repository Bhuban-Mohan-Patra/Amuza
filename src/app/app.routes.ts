import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {
        component:HomeComponent,
        path: ''
        
    },
    {
        component: AboutComponent,
        path:'about'
    },
    {
        component: ContactComponent,
        path:'contact'
    },
    {
        component: LoginComponent,
        path:'login'
    },
    {
        component: SignupComponent,
        path:'signup'
    }
];
