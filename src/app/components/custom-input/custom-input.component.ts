import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent  implements OnInit {
  constructor() { }

  @ViewChild('input') element: IonInput | undefined;
  @Input() placeholder = "Escribe aquí...";
  @Input() type = "text";
  @Input() value = "";
  @Input() iconStart: string | boolean = false;
  @Input() iconEnd: string | boolean = false;

  ngOnInit() {
    if (this.type == 'date') {
      const _date = new Date();
      this.value = moment(_date).format("YYYY-MM-DD");
      setTimeout(()=>((this.element)&&(this.element.value = _date.toISOString().substring(0,10))), 1000);
    }
  }

  onChange({ target: { value } }: any) {
    this.value = value;
  }

}
