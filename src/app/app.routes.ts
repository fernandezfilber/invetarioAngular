import { Routes } from '@angular/router';

import { Principal } from './principal/principal';
import { Productos } from './productos/productos';


export const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal', component: Principal },
  { path: 'productos', component: Productos },
  // Agrega el resto de tus rutas aquí
  // { path: 'ofertas', component: Ofertas },
  // { path: 'marcas', component: Marcas },
  // { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: '/principal' }
];
