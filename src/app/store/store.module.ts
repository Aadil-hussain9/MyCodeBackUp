import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreComponent } from "./store.component";
import { ModelModule } from "../model/model.module";
import { CartSummaryComponent } from "./cartSummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";
import { RouterModule } from "@angular/router";



@NgModule({
    imports : [ModelModule, BrowserModule,RouterModule],
    exports : [StoreComponent,CheckoutComponent,CartDetailComponent], //used by other module e.g AppModule is using Store Module
    declarations : [StoreComponent , CartSummaryComponent,CheckoutComponent,CartDetailComponent], //ref of all @component | @pipe | @Directive decorators
    providers : [] 
})
export class StoreModule
{
    
}