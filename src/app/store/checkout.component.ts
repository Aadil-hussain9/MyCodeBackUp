import { Component } from "@angular/core";
import { Order } from "../model/order.model";
import { OrderRepository } from "../model/order.repository";

@Component({
    templateUrl: "checkout.component.html"
})
export class CheckoutComponent
{

    orderSent :boolean = false;
    submitted :boolean = false;


    constructor(public order : Order,
        public repository :OrderRepository){}
}