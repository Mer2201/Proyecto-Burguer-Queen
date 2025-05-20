import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NgxsModule } from '@ngxs/store';
import { CreateAccountComponent } from './shared/create-account/create-account.component';
import { ListProductsOrderComponent } from './shared/list-products-order/list-products-order.component';
import { LoginComponent } from './shared/login/login.component';
import { FooterComponent } from './shared/toolbar/footer/footer.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { AuthState } from './state/auth/auth.state';
import { CategoriesState } from './state/categories/categories.state';
import { OrdersState } from './state/orders/orders.state';
import { ProductsState } from './state/products/products.state';
import { StripeState } from './state/stripe/stripe.state';
import { UsersState } from './state/users/users.state';


export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, '/assets/i18n/','.json')
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxsModule.forRoot([
      CategoriesState,
      ProductsState,
      AuthState,
      UsersState,
      StripeState,
      OrdersState
    ]),
    ToolbarComponent,
    FooterComponent,
    LoginComponent,
    CreateAccountComponent,
    ListProductsOrderComponent
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, NavParams],
  bootstrap: [AppComponent],
})
export class AppModule {}
