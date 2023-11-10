import { Component, Input, OnInit } from '@angular/core';

export type CustomSelectOptions = {
  name: string;
  value?: string | number;
};

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
})
export class CustomSelectComponent  implements OnInit {
  constructor() { }

  @Input() options: CustomSelectOptions[] = [];
  @Input() valSelect: string | number = "";

  public onChange(index: number) {
    this.valSelect = this.options[index].value??this.options[index].name;
  }

  ngOnInit() {}

}
