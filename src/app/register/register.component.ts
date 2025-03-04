import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-register',
  // standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  formTitle: string = 'Registration Form';
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.http.post('http://srv1127.hstgr.io:3000/register', this.form.value)
        .subscribe({
          next: response => console.log('Success:', response),
          error: error => console.error('Error:', error),
          complete: () => console.log('Completed!')
        });
    }
  }
}
