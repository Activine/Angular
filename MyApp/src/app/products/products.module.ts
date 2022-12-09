import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header/header.component";
import { ProdCardComponent } from "./prod-card/prod-card.component";
import { UaCurrencyPipe } from "./pipes/ua-currency.pipes";
import { ColorDirective } from "./directive/color.directive";

@NgModule({
    imports: [CommonModule],
    declarations: [
      HeaderComponent,
      ProdCardComponent,
      UaCurrencyPipe,
      ColorDirective,
    ],
    exports: [],
})
export class ComponentInteractionModule {}
