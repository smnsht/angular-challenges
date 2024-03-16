import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

import { 
  Component, 
  ContentChild, 
  EventEmitter, 
  Input, 
  Output, 
  TemplateRef 
} from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [NgIf, NgFor, NgTemplateOutlet],
})
export class CardComponent<T> {
  @Input() list: T[] | null = null;  
  @Input() customClass = '';

  @Output() add = new EventEmitter()
  
  constructor() {}

  @ContentChild('rowRef', { read: TemplateRef })
  rowTemplate!: TemplateRef<{ $implicit: T }>

  addNewItem() {
    this.add.emit()    
  }
}
