import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Producto {
  nombre: string;
  precio: number,
  stock: number;
  imageURL: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home implements OnInit, OnDestroy {

  productos: Producto[] = [];

  ngOnInit(): void {
    this.productos = [
      { nombre: "Iphone 17", precio: 6000, stock: 5, imageURL: '/iphone17.webp' },
      { nombre: "Galaxy Tab S11", precio: 3000, stock: 10, imageURL: '/galaxyTabS11.webp' },
      { nombre: "Nintendo Switch 2", precio: 2400, stock: 3, imageURL: '/switch2.webp' },
      { nombre: "Playstation 5", precio: 2200, stock: 0, imageURL: '/ps5.webp' },
      { nombre: "Nintendo Switch", precio: 1600, stock: 6, imageURL: '/switch.webp' },
      { nombre: "MacBook Pro 2020", precio: 3100, stock: 4, imageURL: '/macBookPro2020.webp' },
      { nombre: "Impresora HP Smart Tank 580", precio: 650, stock: 10, imageURL: '/HPSmarthTank.webp' },
      { nombre: "Impresora Epson L3250 Wifi", precio: 670, stock: 6, imageURL: '/Epsonimpresora.webp' },
      { nombre: "Audífonos Inalámrbicos", precio: 110, stock: 0, imageURL: '/audifonos.webp' },
      { nombre: "Kit Teclado + Mouse", precio: 90, stock: 2, imageURL: '/kitteclado.webp' },
    ];
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destruido');
  }

  comprar(producto: Producto): void {
    if (producto.stock > 0) {
      producto.stock--;
      console.log(`Compraste ${producto.nombre}. Stock restante: ${producto.stock}`);
    }
  }
}