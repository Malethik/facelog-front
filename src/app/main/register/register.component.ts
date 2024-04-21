import { Component, inject } from '@angular/core';
import { StateService } from '../../core/service/state/state.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RepoService } from '../../core/service/repo/repo.service';
import { UserCreateDto, UserLoginDto } from '../../core/entities/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export default class RegisterComponent {
  private repo = inject(RepoService);
  private state = inject(StateService);
  private fb = inject(FormBuilder);
  formRegister = this.fb.group({
    name: ['admin', Validators.required],
    password: ['admin', Validators.required],
    email: ['admin@sample.com', Validators.required],
  });

  submit() {
    this.repo.createUser(this.formRegister.value as UserCreateDto).subscribe({
      next: (data) => {
        console.log('User created');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
