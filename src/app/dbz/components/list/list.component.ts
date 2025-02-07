import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterInteface } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false,
})
export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter

  //? Para obtener datos del mundo exterior
  @Input()
  public characterList: CharacterInteface[] = [];

  emitDeleteCharacter(id: string): void {
    this.onDeleteCharacter.emit(id);
  }
}
