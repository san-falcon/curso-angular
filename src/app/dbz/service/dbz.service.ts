import { Injectable } from '@angular/core';
import { CharacterInteface } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

/*
  ? El decorador @Injectable le dice a Angular que es un servicio
*/
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: CharacterInteface[] = [
    { id: uuid(), name: 'Krilin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 7500 },
  ];

  constructor() { }

  addCharacter(character: CharacterInteface): void {
    character.id = uuid();
    this.characters.push(character);
  }

  /* onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  } */

  deleteCharacterById(id: string): void {
    //? Filtramos para que me traiga un listado de todos menos del  id que estoy eliminando
    //? Despues obtenido un listado lo volvemos a guardar
    //? Si te das cuenta guardamos el listado sin el id que queriamos eliminar, haciendo que se elimine de una manera muy eficiente
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
