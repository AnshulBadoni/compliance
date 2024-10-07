import { Component } from '@angular/core';
import { signInFields } from '../../constant';
import { signInFieldsProps } from '../../interfaces';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  signInFields: signInFieldsProps[] = signInFields;
  isLoading: boolean = false;
  warning: boolean = false;
  loginForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initalization();
  }

  initalization() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(2)]],
      admin: [false],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  login() {
    this.isLoading = true;
    this.warning = false;
    console.log(this.isLoading, this.warning);
    console.log(this.loginForm.value.email);
    if (
      this.loginForm.value.email === 'admin' &&
      this.loginForm.value.password === 'admin'
    ) {
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      }, 3000);
    } else {
      setTimeout(() => {
        this.isLoading = false;
        this.warning = true;
      }, 3000);
    }
  }
}
