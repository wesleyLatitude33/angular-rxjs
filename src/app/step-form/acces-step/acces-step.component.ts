import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/shared/interface/cliente.interface';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'app-acces-step',
  templateUrl: './acces-step.component.html',
  styleUrls: ['./acces-step.component.scss']
})
export class AccesStepComponent implements OnInit {

  form!: FormGroup;
  hide = true;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.startForm();
  }
  
  startForm(): void{
    this.form = this.fb.group({
      password: this.fb.control('', Validators.required),
      validPass: this.fb.control('', Validators.required),
      phrase: this.fb.control('', Validators.required),
    })
  }

}
