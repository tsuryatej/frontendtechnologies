import {Routes} from '@angular/router';
import {ContentCardComponent} from './content-card/content-card.component';
import {CustomButtonComponent} from './custom-button/custom-button.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import {RegisterComponent} from './register/register.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ParentComponent} from './parent/parent.component';
import {ChildComponent} from './child/child.component';
import {SubChildComponent} from './sub-child/sub-child.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'main-nav', component: MainNavComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'content-card', component: ContentCardComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'child', component: ChildComponent},
  {path: 'sub-child', component: SubChildComponent},
  {path: 'custom-button', component: CustomButtonComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}, // Default route
  {path: '**', redirectTo: '/home'} // Wildcard route for 404 handling
];
