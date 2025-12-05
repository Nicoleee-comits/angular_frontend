import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = 'http://localhost:4000/api/productos';

  constructor(private http: HttpClient) {}

  // LISTAR (POST)
  obtenerProductos(): Observable<Producto[]> {
    // tu API lista con POST sin body
    return this.http.post<Producto[]>(`${this.apiUrl}`, {});
  }

  // CREAR
  crearProducto(data: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.apiUrl}/crear`, data);
  }

  // ACTUALIZAR
  actualizarProducto(id: number, data: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.apiUrl}/${id}`, data);
  }

  // ELIMINAR
  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
