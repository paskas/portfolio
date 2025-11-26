import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MailContactService } from '../../../../core/services/mail-contact.service';
import { SHARED_UI } from '../../../../shared';
import { TranslateModule } from '@ngx-translate/core';

// function trimValidator() {
//   return (control: any) => {
//     if (!control.value) { return undefined; }
//     const value = control.value as string;
//     if (value !== value.trim()) {
//       return { trimError: true };

//     }
//     return undefined;
//   };
// }

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [...SHARED_UI, ReactiveFormsModule, TranslateModule],
  templateUrl: './contact-form.components.html',
  styleUrl: './contact-form.components.scss'
})

export class ContactFormComponents {
  private formBuilder = inject(FormBuilder)
  private mailContactService = inject(MailContactService)

  formGroup: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.pattern(/^(?!.*\.\.)[^\s@]+(\.[^\s@]+)*@[^\s@]+\.[^\s@]{2,}$/)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacy: [false, [Validators.requiredTrue]]
  });

  isSending = false;
  sendSuccess = false;
  sendError = false;

  cleanOnBlur(inputArea: string): void {
    const input = this.formGroup.get(inputArea);
    if (!input) { return; }
    let value = input.value;
    if (typeof value !== 'string') { return; }
    value = value.trim();
    if (inputArea === 'email') {
      value = value.replace(/\s+/g, '').toLowerCase();
    }
    input.setValue(value, { emitEvent: true });
  }

  onSubmit(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    this.isSending = true;
    this.sendSuccess = false;
    this.sendError = false;
    let { name, email, message } = this.formGroup.getRawValue();
    name = name.trim();
    message = message.trim();
    email = email.trim().toLowerCase();
    this.mailContactService.sendMessage$({ name, email, message }).subscribe({
      next: () => {
        this.isSending = false;
        this.sendSuccess = true;
        this.formGroup.reset({ privacy: false });
      },
      error: () => {
        this.isSending = false;
        this.sendError = true;
      }
    });
  }
}
