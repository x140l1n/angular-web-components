import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import '../lib/components/xiao-input/xiao-input';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class AppComponent implements OnInit, OnDestroy {
  private subscriptionFormValueChanges?: Subscription;

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

    this.subscriptionFormValueChanges = this.form.valueChanges.subscribe(() => {
      this.isSubmitted = false;
    });
  }

  ngOnDestroy() {
    this.subscriptionFormValueChanges?.unsubscribe();
  }

  onSubmit() {
    this.isSubmitted = true;
  }
}
