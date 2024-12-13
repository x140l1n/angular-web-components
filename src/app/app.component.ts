import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import '../lib/components/xiao-input/xiao-input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class AppComponent implements OnInit {
  title = 'angular-web-components';

  isSubmitted = false;

  firstname = new FormControl('');
  lastname = new FormControl('');
  email = new FormControl('', { validators: [Validators.email] });

  form = new FormGroup({
    firstname: this.firstname,
    lastname: this.lastname,
    email: this.email,
  });

  ngOnInit() {
    this.form.controls['firstname']?.setValue('Xiaolin');
    this.form.controls['lastname']?.setValue('Jin Lin');
    this.form.controls['email']?.setValue('xjin@uxland.cat');
  }

  onSubmit() {
    this.isSubmitted = true;
  }
}
