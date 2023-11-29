import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: any = this.fb.group({
    mesa: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  onSubmit(): void {
    if (this.form.valid) {
      this.auth.login(this.form.value);
    }
  }
}
