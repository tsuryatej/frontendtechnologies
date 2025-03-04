import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-main-nav',
  imports: [
    RouterLink, NgFor, RouterLinkActive
  ],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss'
})
export class MainNavComponent {
  title: string = 'angular stores';
  navLinks = [
    {path: '/home', label: 'Home'},
    {path: '/about', label: 'About'},
    {path: '/contact', label: 'Contact'}
  ];

  authLinks = [
    {path: '/login', label: 'Login'},
    {path: '/register', label: 'Register'}
  ];
}
