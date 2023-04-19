import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component({

    //never use selector in case of routing
    templateUrl :"cartDetail.component.html"
})
export class CartDetailComponent
{
   constructor(public cart : Cart){}
}