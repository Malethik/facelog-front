import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import LoginComponent from './main/login/login.component';
import { HeaderComponent } from './main/shared/header/header.component';
import { FooterComponent } from './main/shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, HeaderComponent, FooterComponent],
  template: ` <router-outlet /> `,
  styles: `

`,
})
export class AppComponent {}
