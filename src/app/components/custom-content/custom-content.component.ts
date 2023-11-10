import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomSelectOptions } from '../custom-select/custom-select.component';

@Component({
  selector: 'app-custom-content',
  templateUrl: './custom-content.component.html',
  styleUrls: ['./custom-content.component.scss'],
})
export class CustomContentComponent  implements OnInit {
  constructor() {}

  /* ##### Fabricante ##### */
  public fabricOptions: CustomSelectOptions[] = [
    { name: "Fabrica 1" },
    { name: "Fabrica 2" },
    { name: "Fabrica 3" }
  ];
  public fabricVal = "";
  
  /* ##### Producto ##### */
  public productVal = "";
  
  /* ##### Ingrediente activo ##### */
  public ingredientVal = "";

  /* ##### Problema atendido ##### */
  public problemOptions: CustomSelectOptions[] = [
    { name: "Problema 1" },
    { name: "Problema 2" },
    { name: "Problema 3" }
  ];
  public problemVal = "";
  
  /* ##### Nombre del problema ##### */
  public problemNameOptions: CustomSelectOptions[] = [
    { name: "Nombre problema 1" },
    { name: "Nombre problema 2" },
    { name: "Nombre problema 3" }
  ];
  public problemNameVal = "";
  
  /* ##### Fecha de aplicación ##### */
  public dateOfAplicationVal = "";
  
  /* ##### Dosis ##### */
  public dosisVal = "";
  
  /* ##### Dosis ##### */
  public consumeVal = "";

  ngOnInit(): void {
  }
}