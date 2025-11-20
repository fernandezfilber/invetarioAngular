
import { Producto } from '../models/producto';

import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProductosService {


  private url = 'http://localhost:8080/productos';

  constructor( private http: HttpClient){}

  getAll(): Observable<Producto[]> {

    return this.http.get<Producto []> ( `${this.url}/listar`)
  }

  create(producto: Producto): Observable<Producto>{

    return this.http.post<Producto>(`${this.url}/guardar`, producto)
  }

}
