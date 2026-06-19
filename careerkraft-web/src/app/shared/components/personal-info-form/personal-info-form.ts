import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info-form',
  imports: [ReactiveFormsModule],
  templateUrl: './personal-info-form.html',
  styleUrl: './personal-info-form.scss',
})
export class PersonalInfoForm {
  private readonly fb = new FormBuilder();

  readonly personalInfoForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.maxLength(50)]],
    lastName: ['', [Validators.required, Validators.maxLength(50)]],
    title: ['', [Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.maxLength(20)]],
    location: ['', [Validators.maxLength(100)]],
    linkedin: ['', [Validators.maxLength(200)]],
    portfolio: ['', [Validators.maxLength(200)]],
    github: ['', [Validators.maxLength(200)]],
    xing: ['', [Validators.maxLength(200)]],
  });

  onSubmit(): void {
    if (this.personalInfoForm.valid) {
      console.log('Personal Info:', this.personalInfoForm.value);
    }
  }
}
