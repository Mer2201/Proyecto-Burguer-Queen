import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EventType, Router, RoutesRecognized } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { IonicModule, MenuController, NavController } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { KEY_TOKEN } from 'src/app/constants/constant';
import { ToastService } from 'src/app/services/toast.service';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { ListProductsOrderComponent } from '../list-products-order/list-products-order.component';
import { LoginComponent } from "../login/login.component";
import { UserOrderService } from './../../services/user-order.service';

@Component({
  selector: 'app-toolbar',
  standalone:true,
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [IonicModule, CommonModule, TranslateModule, LoginComponent, CreateAccountComponent,
    ListProductsOrderComponent]
})
export class ToolbarComponent  implements OnInit {

  public showBack: boolean;
  public showInfoUser: boolean;
  public showCreateAccount: boolean;
  public showOrder: boolean;

  constructor(
    private router: Router,
  private navController: NavController,
  public userOrderService: UserOrderService,
  private menuController : MenuController,
  private toastService: ToastService,
  private translate: TranslateService
) {
    this.showBack = false;
    this.showInfoUser= false;
    this.showCreateAccount=false;
    this.showOrder = false;
   }

  ngOnInit() {
    this.router.events.pipe(
      filter( (event) => event.type == EventType.
    RoutesRecognized)
    ).subscribe({
      next: (event: RoutesRecognized) => {
        this.showBack = event.state.root.firstChild.data
        ['showBack'];

      }
    })
  }

  goBack(){
    this.navController.back();

  }
  back(){
    this.showInfoUser = false;
    this.showCreateAccount = false;
    this.showOrder = false;
  }

  newAccount(){
    this.showCreateAccount = true;
  }

  showLogin(){
    this.showCreateAccount =false
  }

  goToPay(){
    this.back();
    this.menuController.close('content');
    this.navController.navigateForward('pay');

  }

  seeOrder(){
    this.showOrder = true;

  }

  async logout(){
    await this.userOrderService.Clear();
    await Preferences.remove({ key: KEY_TOKEN});
    this.navController.navigateForward('categories');
    this.menuController.close('content');
    this.toastService.showToast(
      this.translate.instant('label.logout.success')
    )

  }

  showPanelInfoUser(){
    this.showInfoUser = true;
  }



}
