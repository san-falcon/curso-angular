import { Component, EventEmitter, Output } from '@angular/core';
import { CharacterInteface } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
  standalone: false,
})
export class AddCharacterComponent {

  /* @Output()
    ? Define una salida del componente que el componente padre puede suscribirse para escuchar
  */
  @Output()
  public onNewCharacter: EventEmitter<CharacterInteface> = new EventEmitter();

  public character: CharacterInteface = {
    id: '',
    name: '',
    power: 0
  }

  emitCharacter(): void {
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character = { id: '', name: '', power: 0 };
  }

}
