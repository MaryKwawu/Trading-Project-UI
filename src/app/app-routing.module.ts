import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { MarketsComponent } from './components/pages/markets/markets.component';
import { TradesComponent } from './components/pages/trades/trades.component';
import { PriceComponent } from './components/pages/price/price.component';
import { OrdersComponent } from './components/pages/orders/orders.component';
import { ProductComponent } from './components/pages/product/product.component';

const routes: Routes = [
  {path:'signin',component:SignInComponent},
  { path: "signup", component: SignUpComponent },
  {path:'markets', component: MarketsComponent},
  {path:'trades', component: TradesComponent},
  {path:'dashboard', component:DashboardComponent},
  {path: "products", component: ProductComponent},
  {path:"price", component:PriceComponent},
  {path:"orders",component:OrdersComponent},
  {path:'',redirectTo:'/dashboard', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
