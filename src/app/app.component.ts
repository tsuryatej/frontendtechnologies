import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {MainNavComponent} from './main-nav/main-nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, MainNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'version19';
}
