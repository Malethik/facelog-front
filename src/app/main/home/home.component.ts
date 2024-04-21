import { Component, OnInit, inject } from '@angular/core';
import { StateService } from '../../core/service/state/state.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent implements OnInit {
  public state = inject(StateService);
  public user = this.state.getState().subscribe((state) => state.currenUser);

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
