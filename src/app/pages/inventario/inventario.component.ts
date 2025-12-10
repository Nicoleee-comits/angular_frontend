import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../../services/productos';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {

  productos: any[] = [];

  nuevoProducto = {
    nombre_producto: '',
    marca: '',
    modelo: '',
    nro_serie: ''
  };
    editando: boolean = false;
    productoEditando: any = null;

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    this.cargarProductos();
  }

  // 🔹 CARGAR PRODUCTOS DESDE LA API
  cargarProductos() {
    this.productosService.obtenerProductos().subscribe({
      next: (data) => {
        this.productos = data;
      },
      error: (err) => {
        console.error("Error cargando productos:", err);
      }
    });
  }

  // 🔹 CREAR PRODUCTO
  crearProducto() {
    this.productosService.crearProducto(this.nuevoProducto).subscribe({
      next: () => {
        this.cargarProductos();
      },
      error: (err) => {
        console.error("Error al crear:", err);
      }
    });
  }

  // 🔹 ELIMINAR
  eliminarProducto(id: number) {
    this.productosService.eliminarProducto(id).subscribe({
      next: () => {
        this.cargarProductos();
      },
      error: (err) => {
        console.error("Error eliminando:", err);
      }
    });
  }

  activarEdicion(producto: any) {
  this.editando = true;
  this.productoEditando = { ...producto }; // clonamos para no dañar la tabla
}

guardarEdicion() {
  this.productosService.actualizarProducto(
    this.productoEditando.id_producto,
    this.productoEditando
  ).subscribe({
    next: () => {
      this.editando = false;
      this.productoEditando = null;
      this.cargarProductos();
    },
    error: (err) => console.error("Error actualizando:", err)
  });
}

cancelarEdicion() {
  this.editando = false;
  this.productoEditando = null;
}

}
