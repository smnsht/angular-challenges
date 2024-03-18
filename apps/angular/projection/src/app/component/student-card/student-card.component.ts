import { Component, OnInit } from '@angular/core';
import {
  FakeHttpService,
  randStudent,
} from '../../data-access/fake-http.service';
import { StudentStore } from '../../data-access/student.store';
import { Student } from '../../model/student.model';
import { CardComponent } from '../../ui/card/card.component';
import { ListItemComponent } from '../../ui/list-item/list-item.component';

@Component({
  selector: 'app-student-card',
<<<<<<< HEAD
  template: `<app-card
    [list]="students"
    (addNewClick)="onAddNewClick()"
    customClass="bg-light-green">
    <img headingImage src="assets/img/student.webp" width="200px" />
    <ng-template #rowRef let-student>
      <app-list-item (deleteClick)="onDeleteStudent(student.id)">
        {{ student.firstname }}
      </app-list-item>
    </ng-template>
  </app-card>`,
=======
  template: `
    <app-card
      [list]="students"
      [type]="cardType"
      customClass="bg-light-green"></app-card>
  `,
>>>>>>> 17108c32343a872f6320c50f3ecceac619923617
  standalone: true,
  styles: [
    `
      ::ng-deep .bg-light-green {
        background-color: rgba(0, 250, 0, 0.1);
      }
    `,
  ],
  imports: [CardComponent, ListItemComponent],
})
export class StudentCardComponent implements OnInit {
  students: Student[] = [];

  constructor(
    private http: FakeHttpService,
    private store: StudentStore,
  ) {}

  ngOnInit(): void {
    this.http.fetchStudents$.subscribe((s) => this.store.addAll(s));

    this.store.students$.subscribe((s) => (this.students = s));
  }

  onAddNewClick(): void {
    this.store.addOne(randStudent());
  }

  onDeleteStudent(id: number): void {
    this.store.deleteOne(id);
  }
}
