import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterForm } from './register-form.model';

@Component({
  selector: 'dk-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void {
    this.form = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      confirmPassword: ['', Validators.required],
      fullName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(64)]],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      pin: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern('^[0-9]*$')]],
      confirmPin: ['', Validators.required],
      flagTerms: [false, Validators.requiredTrue]
    }, {
      validator: [
        this.MustMatch('password', 'confirmPassword'),
        this.MustMatch('email', 'confirmEmail'),
        this.MustMatch('pin', 'confirmPin')]
    });
  }

  public onSubmit(form: RegisterForm): void {
    console.log(form);
  }

  public MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

}
