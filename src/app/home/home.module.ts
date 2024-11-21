import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JobPostingComponent } from './components/job-posting/job-posting.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    JobPostingComponent,
    AlertsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        { path: '', component: HomeComponent }
    ]),
    NavbarComponent,
    JobPostingComponent,
    AlertsComponent,
    FooterComponent
]
})
export class HomeModule {}