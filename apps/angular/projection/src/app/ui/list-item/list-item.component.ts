import { 
  Component, 
  EventEmitter, 
  Input, 
  Output 
} from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-list-item',
  template: `
    <div class="border border-grey-300 py-1 px-2 flex justify-between">      
      <ng-content></ng-content>
      <button (click)="onDelete()">
        <img class="h-5" src="assets/svg/trash.svg" />
      </button>
    </div>
  `,
  imports: [NgTemplateOutlet],
  standalone: true,
})
export class ListItemComponent<T> {
  @Input() item!: T;
  @Output() delete = new EventEmitter<T>()

  constructor() {}

  onDelete() {    
    this.delete.emit(this.item)
  }
}