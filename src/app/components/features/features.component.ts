import { Component, OnInit } from '@angular/core';
import { Feature } from 'src/app/models/interfaces/Feature.interface';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  features: Feature[] = [
    {
      title: "Facturación",
      icon: "../../../assets/icons/network.svg",
      description: "Genera facturas o recibos de compra, imprímelas o envíalas por correo."
    },
    {
      title: "Inventario",
      icon: "../../../assets/icons/network.svg",
      description: "Genera facturas o recibos de compra, imprímelas o envíalas por correo."
    },
    {
      title: "E-commerce",
      icon: "../../../assets/icons/network.svg",
      description: "Genera facturas o recibos de compra, imprímelas o envíalas por correo."
    },
    {
      title: "E-commerce",
      icon: "../../../assets/icons/network.svg",
      description: "Genera facturas o recibos de compra, imprímelas o envíalas por correo."
    },
    {
      title: "E-commerce",
      icon: "../../../assets/icons/network.svg",
      description: "Genera facturas o recibos de compra, imprímelas o envíalas por correo."
    },
    {
      title: "E-commerce",
      icon: "../../../assets/icons/network.svg",
      description: "Genera facturas o recibos de compra, imprímelas o envíalas por correo."
    },
    {
      title: "E-commerce",
      icon: "../../../assets/icons/network.svg",
      description: "Genera facturas o recibos de compra, imprímelas o envíalas por correo."
    },
    {
      title: "E-commerce",
      icon: "../../../assets/icons/network.svg",
      description: "Genera facturas o recibos de compra, imprímelas o envíalas por email."
    },
    {
      title: "E-commerce",
      icon: "../../../assets/icons/network.svg",
      description: "Genera facturas o recibos de compra, imprímelas o envíalas por email."
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
