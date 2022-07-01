import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent implements OnInit {
  rowImage: string = './../../assets/images/ilustracion1.svg';
  leftArrow: string = './../../assets/icons/left-arrow.svg';
  constructor() { }

  ngOnInit(): void {
  }

}
