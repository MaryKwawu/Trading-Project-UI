import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
//import { UsersComponent } from './users.component';
import { LoginComponent } from './components/pages/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ProductComponent } from './product/product.component';
import { PriceComponent } from './price/price.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ProductComponent,
    PriceComponent,
    SigninComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: LoginComponent },
      { path: "login", component: LoginComponent },
      {path: "products", component: ProductComponent},
      {path:"price", component:PriceComponent},
      {path:"signin",component:SigninComponent},
      {path:"orders",component:OrdersComponent}
      // {path: "price", component:PriceComponent},
      // {p}

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function forRoot(arg0: never[]): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

