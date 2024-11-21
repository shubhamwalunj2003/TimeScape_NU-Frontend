import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    <app-navbar></app-navbar>
    <div class="main-content">
      <app-job-posting></app-job-posting>
      <app-alerts></app-alerts>
    </div>
    <app-footer></app-footer>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
