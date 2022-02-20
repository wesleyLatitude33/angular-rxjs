import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'app-initial-step',
  templateUrl: './initial-step.component.html',
  styleUrls: ['./initial-step.component.scss']
})
export class InitialStepComponent implements OnInit {

  form!: FormGroup;
  subscription!: Subscription;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.startForm();
  }
  
  startForm(): void{
    this.form = this.fb.group({
      fullName: this.fb.control('', Validators.required),
      email: this.fb.control('', [Validators.required, Validators.email]),
      telefone: this.fb.control('', Validators.required),
      endereco: this.fb.control('', Validators.required),
      cidade: this.fb.control('', Validators.required),
      estado: this.fb.control('', Validators.required)
    })
  }
}