import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/shared/interface/cliente.interface';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'app-valid-step',
  templateUrl: './valid-step.component.html',
  styleUrls: ['./valid-step.component.scss']
})
export class ValidStepComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb:FormBuilder, 
    private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.startForm();
  }
  
  startForm(): void{
    this.form = this.fb.group({
      CorpName: this.fb.control('', Validators.required),
      cargo: this.fb.control('', Validators.required),
      nivel: this.fb.control('', Validators.required),
      admissao: this.fb.control('', Validators.required),
      ferramenta: this.fb.control('', Validators.required),
    })
  }

}
