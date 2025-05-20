import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListProductsPageRoutingModule } from './list-products-routing.module';

import { TranslateModule } from '@ngx-translate/core';
import { ListProductsPage } from './list-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListProductsPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [ListProductsPage]
})
export class ListProductsPageModule {}
