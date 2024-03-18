import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  template: `
<<<<<<< HEAD
    <div class="border border-grey-300 py-1 px-2 flex justify-between">
      <ng-content></ng-content>
      <button (click)="deleteClick.emit()">
=======
    <div class="border-grey-300 flex justify-between border px-2 py-1">
      {{ name }}
      <button (click)="delete(id)">
>>>>>>> 17108c32343a872f6320c50f3ecceac619923617
        <img class="h-5" src="assets/svg/trash.svg" />
      </button>
    </div>
  `,
  standalone: true,
})
export class ListItemComponent {
<<<<<<< HEAD
  @Output()
  deleteClick = new EventEmitter<void>();
=======
  @Input() id!: number;
  @Input() name!: string;
  @Input() type!: CardType;

  constructor(
    private teacherStore: TeacherStore,
    private studentStore: StudentStore,
  ) {}

  delete(id: number) {
    if (this.type === CardType.TEACHER) {
      this.teacherStore.deleteOne(id);
    } else if (this.type === CardType.STUDENT) {
      this.studentStore.deleteOne(id);
    }
  }
>>>>>>> 17108c32343a872f6320c50f3ecceac619923617
}
