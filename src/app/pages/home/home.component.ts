import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  form!: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: this.fb.control('', [Validators.required]),
      cognome: this.fb.control('', [Validators.required]),
      psw: this.fb.control('', [Validators.required]),
      cpsw: this.fb.control('', [Validators.required]),
      img: this.fb.control(''),
      biografia: this.fb.control(''),
      genere: this.fb.control('', [Validators.required]),
      username: this.fb.control('', [Validators.required]),
    });
  }

  isTouched(input: string) {
    return this.form.get(input)?.touched;
  }

  isValid(input: string) {
    return this.form.get(input)?.valid;
  }

  potara(input: string) {
    console.log(this.form.controls[0].value); //non ho fatto in tempo lo devo ciclare e crearmi i controlli personalizzati
    return !this.isValid(input) && !this.isTouched(input);
  }
}
