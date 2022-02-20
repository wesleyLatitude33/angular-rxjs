import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cliente } from '../interface/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  public clienteFormInfo$: Observable<Cliente>;
  private subClienteForm: BehaviorSubject<Cliente>;

  private clienteFormData: Cliente = {};

  constructor(private http: HttpClient) { 
    this.subClienteForm = new BehaviorSubject<Cliente>({});
    this.clienteFormInfo$ = this.subClienteForm.asObservable();

    this.clienteFormInfo$.subscribe(
      (res) => (this.clienteFormData = res)
    );
  }

  sendData(data: Cliente): void {
    this.clienteFormData = {
      ...this.clienteFormData,
      ...data
    };
    this.subClienteForm.next(this.clienteFormData);
  }

  clearData(): boolean {
    this.clienteFormData = {};
    this.subClienteForm.next(this.clienteFormData);
    return true;
  }
}
