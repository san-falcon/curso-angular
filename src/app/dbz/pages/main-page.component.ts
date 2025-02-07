/*
 ? El directorio "pages" su uso es tener almacenar varios componentes
*/

import { Component, OnInit } from '@angular/core';
import { DbzService } from '../service/dbz.service';
import { CharacterInteface } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false
})

export class MainPageComponent {

  //? Esto hace la injeccion de dependencia
  constructor(private dbzService: DbzService) {

  }

  get characters(): CharacterInteface[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: CharacterInteface): void {
    this.dbzService.addCharacter(character);
  }


}
