import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = 'http://localhost:4000/api/productos';

  constructor(private http: HttpClient) {}

  // 🔹 OBTENER PRODUCTOS (GET)
  obtenerProductos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // 🔹 CREAR PRODUCTO
  crearProducto(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear`, data);
  }

  // 🔹 OBTENER POR ID
  obtenerPorId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // 🔹 ACTUALIZAR PRODUCTO
  actualizarProducto(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // 🔹 ELIMINAR PRODUCTO
  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
