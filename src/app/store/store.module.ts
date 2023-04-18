import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreComponent } from "./store.component";
import { ModelModule } from "../model/model.module";



@NgModule({
    imports : [ModelModule, BrowserModule],
    exports : [StoreComponent], //used by other module e.g AppModule is using Store Module
    declarations : [StoreComponent], //ref of all @component | @pipe | @Directive decorators
    providers : [] 
})
export class StoreModule
{
    
}