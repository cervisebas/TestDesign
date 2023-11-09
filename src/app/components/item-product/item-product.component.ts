import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss'],
})
export class ItemProductComponent  implements OnInit {
  constructor() { }

  public name: string = "Papas campeonas";
  public date: string = "Sep. 01, 2020";
  public status: string = "32 DDE";

  ngOnInit() {}

}
