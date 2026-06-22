import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { PersonalInfoForm } from './personal-info-form';

describe('PersonalInfoForm', () => {
  let component: PersonalInfoForm;
  let fixture: ComponentFixture<PersonalInfoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalInfoForm],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalInfoForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when first name is empty', () => {
    component.personalInfoForm.patchValue({
      firstName: '',
      lastName: 'Doe',
      email: 'test@example.com',
    });

    expect(component.personalInfoForm.valid).toBeFalse();
  });

  it('should be invalid when last name is empty', () => {
    component.personalInfoForm.patchValue({
      firstName: 'John',
      lastName: '',
      email: 'test@example.com',
    });

    expect(component.personalInfoForm.valid).toBeFalse();
  });

  it('should be invalid when email is empty', () => {
    component.personalInfoForm.patchValue({
      firstName: 'John',
      lastName: 'Doe',
      email: '',
    });

    expect(component.personalInfoForm.valid).toBeFalse();
  });

  it('should emit form value when form is valid', () => {
    spyOn(component.formSubmitted, 'emit');

    const formValue = {
      firstName: 'John',
      lastName: 'Doe',
      title: 'Software Developer',
      email: 'test@example.com',
      phone: '+49 123456789',
      location: 'Germany',
      linkedin: 'https://linkedin.com/in/example',
      portfolio: 'https://example.com',
      github: 'https://github.com/example',
      xing: 'https://xing.com/example',
    };
    Object.entries(component.personalInfoForm.controls).forEach(([key, control]) => {
      console.log(key, control.errors);
    });
    component.personalInfoForm.setValue(formValue);
    expect(component.personalInfoForm.valid).toBeTrue();

    component.onSubmit();
    expect(component.formSubmitted.emit).toHaveBeenCalledWith(formValue);
  });

  it('should not emit when form is invalid', () => {
    spyOn(component.formSubmitted, 'emit');

    component.personalInfoForm.patchValue({
      firstName: '',
      lastName: '',
      email: '',
    });

    component.onSubmit();

    expect(component.formSubmitted.emit).not.toHaveBeenCalled();
  });

  it('should reset the form when cancelled', () => {
    component.personalInfoForm.patchValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@example.com',
    });

    component.onClose();

    expect(component.personalInfoForm.getRawValue()).toEqual({
      firstName: '',
      lastName: '',
      title: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      portfolio: '',
      xing: '',
      github: '',
    });
  });

  it('should not submit when cancel button is clicked', () => {
    spyOn(component.formSubmitted, 'emit');

    component.onClose();

    expect(component.formSubmitted.emit).not.toHaveBeenCalled();
  });
});
