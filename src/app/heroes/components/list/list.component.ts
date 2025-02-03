import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ["Spiderman", "Iroman", "Hulk", "Thor", "She Hulk"];
  public deleteHeroe?: string;

  removeLastHero(): void {
    this.deleteHeroe = this.heroNames.pop();
  }
}
