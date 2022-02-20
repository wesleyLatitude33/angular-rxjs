import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/shared/interface/cliente.interface';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  hide = true;
  subscription!: Subscription;
  clienteData!: Cliente;

  constructor(private fb:FormBuilder, 
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.startForm();
    this.patchForm();
  }
  
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  patchForm(): void {
    this.subscription =
      this.clienteService.clienteFormInfo$.subscribe((res) => {
        if (res.fullName) {
          this.form.patchValue({ ...res, validPass: res.password });
          this.clienteData = res;
        }
      })
  }

  startForm(): void{
    this.form = this.fb.group({
      password: this.fb.control('', Validators.required),
      validPass: this.fb.control('', Validators.required),
      phrase: this.fb.control('', Validators.required),
    })
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.clienteService.sendData({
        password: this.form.get('password')?.value,
        phrase: this.form.get('phrase')?.value,
      });
      this.router.navigate(['/final'], {
        relativeTo: this.activatedRoute
      });
    }
  }
  back(): void {
    this.router.navigate(['/first'], {
      relativeTo: this.activatedRoute,
      state: { keepData: true }
    } as NavigationExtras);
  }


}
