import { NgModule } from "@angular/core";
import { UaCurrencyPipe } from "./pipes/ua-currency.pipes";

@NgModule({
  declarations: [
    UaCurrencyPipe
  ],
  exports: [
    UaCurrencyPipe
  ]
})
export class SharedModule {

}
