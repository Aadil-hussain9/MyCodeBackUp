import { Component } from "@angular/core";
import { Order } from "../model/order.model";
import { OrderRepository } from "../model/order.repository";
import { NgForm } from "@angular/forms";

@Component({
    templateUrl: "checkout.component.html"
})
export class CheckoutComponent
{

    orderSent :boolean = false;
    submitted :boolean = false;


    constructor(public order : Order,
        public repository :OrderRepository){}

    submitOrder(form : NgForm )
    {
        this.submitted = true ;
        if(form.valid)
        {
            this.repository.saveOrder(this.order).subscribe(
                order =>
                {
                    this.order.clear();
                    this.orderSent = true;
                    this.submitted = false;
                }
            );
        }
    }
}