import { Component, OnInit } from '@angular/core';
import {
  FakeHttpService,
  randTeacher,
} from '../../data-access/fake-http.service';
import { TeacherStore } from '../../data-access/teacher.store';
import { Teacher } from '../../model/teacher.model';
import { CardComponent } from '../../ui/card/card.component';
import { ListItemComponent } from '../../ui/list-item/list-item.component';

@Component({
  selector: 'app-teacher-card',
<<<<<<< HEAD
  template: `<app-card
    [list]="teachers"
    (addNewClick)="onAddNewClick()"
    customClass="bg-light-red">
    <img headingImage src="assets/img/teacher.png" width="200px" />
    <ng-template #rowRef let-teacher>
      <app-list-item (deleteClick)="deleteTeacher(teacher.id)">
        {{ teacher.firstname }}
      </app-list-item>
    </ng-template>
  </app-card>`,
=======
  template: `
    <app-card
      [list]="teachers"
      [type]="cardType"
      customClass="bg-light-red"></app-card>
  `,
>>>>>>> 17108c32343a872f6320c50f3ecceac619923617
  styles: [
    `
      ::ng-deep .bg-light-red {
        background-color: rgba(250, 0, 0, 0.1);
      }
    `,
  ],
  standalone: true,
  imports: [CardComponent, ListItemComponent],
})
export class TeacherCardComponent implements OnInit {
  teachers: Teacher[] = [];

  constructor(
    private http: FakeHttpService,
    private store: TeacherStore,
  ) {}

  ngOnInit(): void {
    this.http.fetchTeachers$.subscribe((t) => this.store.addAll(t));

    this.store.teachers$.subscribe((t) => (this.teachers = t));
  }

  onAddNewClick(): void {
    this.store.addOne(randTeacher());
  }

  deleteTeacher(id: number): void {
    this.store.deleteOne(id);
  }
}
