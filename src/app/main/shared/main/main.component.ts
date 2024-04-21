import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import HomeComponent from '../../home/home.component';
import { LeftComponent } from '../left/left.component';
import { RightComponent } from '../right/right.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LeftComponent,
    RightComponent,
  ],
  template: `
    <div class="container">
      <header><app-header></app-header></header>
      <div class="sidebar-left"><app-left /></div>
      <div class="content">
        <app-home></app-home>
      </div>
      <div class="sidebar-right"><app-right /></div>
      <app-footer></app-footer>
    </div>
  `,
  styles: `:host {
  display:flex;
  min-width: 100%;
  min-height: 100vh;
  max-height:500vh;
  background: url("../../../../assets/main.webp") no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  }
  header{
    position:fixed;
    top:0;
    right:0;
    background: transparent;
  backdrop-filter: blur(20px);
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  }
  
  .container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
 margin-top: 2rem;
 margin-left:100px;
 margin-right:100px;
 min-height:80vh;
}
.sidebar-left, .sidebar-right {
  margin-top:47.3px;
  width: 100px;
  height: 100vh;
  backdrop-filter: blur(20px);
  position: fixed;
  top: 0;
  bottom: 0;
}

.sidebar-left {
  left: 0;
}

.sidebar-right {
  right: 0;
}
`,
})
export default class MainComponent {}
