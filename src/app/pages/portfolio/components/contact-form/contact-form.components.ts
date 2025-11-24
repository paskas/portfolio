import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MailContactService } from '../../../../core/services/mail-contact.service';
import { SHARED_UI } from '../../../../shared';
import { TranslateModule } from '@ngx-translate/core';

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
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacy: [false, [Validators.requiredTrue]]
  });

  isSending = false;
  sendSuccess = false;
  sendError = false;

  onSubmit(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    this.isSending = true;
    this.sendSuccess = false;
    this.sendError = false;
    const { name, email, message } = this.formGroup.getRawValue();

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
