import { Component, input } from '@angular/core';

@Component({
  selector: 'app-document-tile',
  imports: [],
  templateUrl: './document-tile.html',
  styleUrl: './document-tile.scss',
})
export class DocumentTile {
  title = input.required<string>();

  variant = input<'solid' | 'dashed'>('solid');
}
