import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  standalone: false,
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name: string = 'iroman';
  public age: number = 45;

  //? Los getters se veen como si fueran propiedades asi que se invoca sin los '()', capitalizeName
  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  //? Los metodos se invocan como si fueran metodos "getHeroDescription()"
  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHeroes(newName: string): void {
    this.name = newName;
  }

  changeAge(newAge: number): void {
    this.age = newAge;
  }

  resetForm(): void {
    this.name = 'Iroman';
    this.age = 45;
  }
}
