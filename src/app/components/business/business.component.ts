import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  companies = [
    {
      "img": "../../../assets/images/fashion.png",
      "title": "Tienda de Moda"
    },
    {
      "img": "../../../assets/images/cosmetics.jpg",
      "title": "Cosmeticos"
    },
    {
      "img": "../../../assets/images/business-local.png",
      "title": "SuperMercado"
    },
    {
      "img": "../../../assets/images/hamburger.png",
      "title": "Comidas"
    },
    {
      "img": "../../../assets/images/suplements.png",
      "title": "Suplementos"
    },
    {
      "img": "../../../assets/images/technology.jpg",
      "title": "Tecnología"
    },
    {
      "img": "../../../assets/images/fashion.png",
      "title": "Tienda de moda"
    },
    {
      "img": "../../../assets/images/fashion.png",
      "title": "Tienda de Moda"
    }
  ]

}

