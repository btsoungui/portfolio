import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

type SendState = 'idle' | 'loading' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly fb = inject(FormBuilder);

  readonly sendState = signal<SendState>('idle');

  readonly form = this.fb.group({
    nom: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    titre: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  get nom() { return this.form.controls.nom; }
  get email() { return this.form.controls.email; }
  get titre() { return this.form.controls.titre; }
  get message() { return this.form.controls.message; }

  async envoyer(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sendState.set('loading');

    try {
      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          name: this.form.value.nom ?? '',
          email: this.form.value.email ?? '',
          title: this.form.value.titre ?? '',
          message: this.form.value.message ?? '',
        },
        { publicKey: environment.emailjs.publicKey },
      );
      this.sendState.set('success');
      this.form.reset();
    } catch {
      this.sendState.set('error');
    }
  }
}
