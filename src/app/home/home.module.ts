import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderMessageComponent } from '../components/header-message/header-message.component';
import { ItemProductComponent } from '../components/item-product/item-product.component';
import { CustomContentComponent } from '../components/custom-content/custom-content.component';
import { CustomSelectComponent } from '../components/custom-select/custom-select.component';
import { CustomInputComponent } from '../components/custom-input/custom-input.component';
import { CustomDividerComponent } from '../components/custom-divider/custom-divider.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    HeaderMessageComponent,
    ItemProductComponent,
    CustomContentComponent,
    CustomSelectComponent,
    CustomInputComponent,
    CustomDividerComponent
  ]
})
export class HomePageModule {}
