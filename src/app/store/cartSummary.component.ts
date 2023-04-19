import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";


@Component({
    selector:"vw-cart-summary",
    templateUrl:"CartSummary.component.html"
})
export class CartSummaryComponent
{
    constructor(public cart :Cart){}
}