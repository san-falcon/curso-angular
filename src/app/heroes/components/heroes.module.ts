import { NgModule } from "@angular/core";
//? CommonModule es un modulo que provee las directivas y pipes básicos que usamos muy a menudo,
// //? como ngIf, ngFor, entre otros.
import { CommonModule } from "@angular/common";

import { HeroeComponent } from "./heroe/heroe.component";
import { ListComponent } from "./list/list.component";


@NgModule({
  /* declarations: Lo que pertenece a este módulo
   ? Aquí declaras qué componentes, directivas y pipes pertenecen a este módulo.
   ? Esto le “dice” a Angular que estos componentes se van a usar dentro de este mismo módulo.
  */
  declarations: [
    HeroeComponent,
    ListComponent
  ],
  /* exports: Lo que quiero compartir con otros módulos
  ? Con esta propiedad definimos qué componentes, directivas o pipes de este módulo,
  ? quieres que estén disponibles en otros módulos que lo importen.
  */
  exports: [
    HeroeComponent,
    ListComponent
  ],
   /* imports: Lo que este módulo necesita usar y traer de otros módulos o librerías Angular
  ? Aquí indicamos otros módulos que necesitas usar dentro de este módulo.
  */
  imports: [
    CommonModule
  ]
})
export class HeroesModule {
}
