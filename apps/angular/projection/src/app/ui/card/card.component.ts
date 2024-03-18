import { NgFor, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-card',
  template: `
    <div
      class="flex w-fit flex-col gap-3 rounded-md border-2 border-black p-4"
      [class]="customClass">
      <img
        *ngIf="type === CardType.TEACHER"
        src="assets/img/teacher.png"
        width="200px" />
      <img
        *ngIf="type === CardType.STUDENT"
        src="assets/img/student.webp"
        width="200px" />

      <section>
        <app-list-item
          *ngFor="let item of list"
          [name]="item.firstName"
          [id]="item.id"
          [type]="type"></app-list-item>
      </section>

      <button
        class="rounded-sm border border-blue-500 bg-blue-300 p-2"
        (click)="addNewItem()">
        Add
      </button>
    </div>
  `,
  standalone: true,
  imports: [NgFor, NgTemplateOutlet, ListItemComponent],
})
export class CardComponent {
  @Input() list: any[] | null = null;
  @Input() customClass = '';

  @Output()
  public addNewClick = new EventEmitter();

<<<<<<< HEAD
  constructor() {}
=======
  constructor(
    private teacherStore: TeacherStore,
    private studentStore: StudentStore,
  ) {}
>>>>>>> 17108c32343a872f6320c50f3ecceac619923617

  @ContentChild('rowRef', { read: TemplateRef })
  rowTemplate!: TemplateRef<{}>;
}
