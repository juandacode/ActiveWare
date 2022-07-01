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
      "title": "Shop Fashion"
    },
    {
      "img": "../../../assets/images/cosmetics.jpg",
      "title": "Cosmetics"
    },
    {
      "img": "../../../assets/images/business-local.png",
      "title": "Supermarket"
    },
    {
      "img": "../../../assets/images/hamburger.png",
      "title": "Food"
    },
    {
      "img": "../../../assets/images/suplements.png",
      "title": "Suplements"
    },
    {
      "img": "../../../assets/images/technology.jpg",
      "title": "Technology"
    },
    {
      "img": "../../../assets/images/fashion.png",
      "title": "Shop Fashion"
    },
    {
      "img": "../../../assets/images/fashion.png",
      "title": "Shop Fashion"
    }
  ]

}

