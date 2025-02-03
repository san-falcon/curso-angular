import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";

@NgModule({
  declarations: [
    CounterComponent
  ],
  //? Hacermos que se vea en el exterior
  exports: [
    CounterComponent
  ]
})
export class CounterModule { }
