import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit {


  form!: FormGroup;
  subscription!: Subscription;

  constructor(private fb:FormBuilder, 
   private clienteService: ClienteService,
   private router: Router,
   private activatedRoute: ActivatedRoute
   ) { }

  ngOnInit(): void {
    this.startForm();
    this.patchForm();
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

  keepData(): void {
    this.clienteService.clearData();
  }

  patchForm(): void {
    this.subscription = 
      this.clienteService.clienteFormInfo$.subscribe((res) => {
        this.form.patchValue(res);
      })
  }

  onSubmit(): void {
   if (this.form.valid) {
      this.clienteService.sendData(this.form.value);
      this.router.navigate(['/second'], {
        relativeTo: this.activatedRoute,
      })
   }
  }

}
