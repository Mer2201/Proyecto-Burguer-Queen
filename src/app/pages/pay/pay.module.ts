import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayPageRoutingModule } from './pay-routing.module';

import { TranslateModule } from '@ngx-translate/core';
import { ListProductsOrderComponent } from 'src/app/shared/list-products-order/list-products-order.component';
import { CreateAccountComponent } from "../../shared/create-account/create-account.component";
import { LoginComponent } from "../../shared/login/login.component";
import { PayPage } from './pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayPageRoutingModule,
    TranslateModule.forChild(),
    LoginComponent,
    CreateAccountComponent,
    ListProductsOrderComponent
],
  declarations: [PayPage]
})
export class PayPageModule {}
