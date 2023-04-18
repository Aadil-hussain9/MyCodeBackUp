import { NgModule } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { ProductRepository } from "./product.repository";


@NgModule({

    imports : [],   //ref of all dependee modules
    exports : [],
    declarations : [],
    providers : [StaticDataSource , ProductRepository]    //reference of all @Injectable classes

})
export class ModelModule
{
    
}