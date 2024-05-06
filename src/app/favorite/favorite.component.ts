import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent {
  @Input('is-favorite') isFavorite: boolean = false;
  @Output() change = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite });
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
