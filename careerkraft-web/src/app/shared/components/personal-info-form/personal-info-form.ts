import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonalInfo } from '../../models/personal-info.model';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-personal-info-form',
  imports: [ReactiveFormsModule],
  templateUrl: './personal-info-form.html',
  styleUrl: './personal-info-form.scss',
})
export class PersonalInfoForm {
  readonly formSubmitted = output<PersonalInfo>();
  modal = inject(ModalService);

  private readonly fb = new FormBuilder();

  readonly personalInfoForm = this.fb.nonNullable.group({
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
    if (this.personalInfoForm.invalid) {
      console.log('Personal Info:', this.personalInfoForm.value);
      this.personalInfoForm.markAllAsTouched();
      return;
    }

    this.formSubmitted.emit(this.personalInfoForm.getRawValue());
  }

  onClose(): void {
    this.personalInfoForm.reset();
    this.modal.close();
  }
}
