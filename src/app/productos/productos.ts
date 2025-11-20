import { ProductosService } from './../services/productosService';
import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../models/producto';

@Component({

  selector: 'app-productos',

  standalone: true,
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],

  imports: [CommonModule],
encapsulation: ViewEncapsulation.Emulated

})
export class Productos implements OnInit {

  productos: Producto[] = [];
  nuevoProducto: Producto = {

    nombre: '',
    descripcion: '',
    precio: 0,
    cantidad: 0,
    marca:  '' ,
    categoria:  ''


  }
  constructor(private productosService: ProductosService) { }



  ngOnInit(): void {

    this.cargarProductos();
  }
  cargarProductos() {

    this.productosService.getAll().subscribe({
      next: (data) => this.productos = data,
      error: (err) => console.error('error', err)
    });


  }

  guardar() {

    this.productosService.create(this.nuevoProducto).subscribe({

      next: () => {
        this.cargarProductos();
        this.nuevoProducto = {

          nombre: '',
          descripcion: '',
          precio: 0,
          cantidad: 0,
          marca: '',
          categoria: ''
        }
      }

    })
  }
}
