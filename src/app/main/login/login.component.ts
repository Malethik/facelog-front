import { Component, inject } from '@angular/core';
import { StateService } from '../../core/service/state/state.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RepoService } from '../../core/service/repo/repo.service';
import { UserLoginDto } from '../../core/entities/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export default class LoginComponent {
  private repo = inject(RepoService);
  private state = inject(StateService);
  private fb = inject(FormBuilder);
  formLogin = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
  });

  submit() {
    this.repo.login(this.formLogin.value as UserLoginDto).subscribe({
      next: ({ token }) => {
        this.state.setLogin(token);
        console.log('Logged in', token);
      },
      error: (err) => {
        console.error(err);
        this.state.setLoginState('error');
      },
    });
  }
}
