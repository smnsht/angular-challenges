import { Component, OnInit } from '@angular/core';
import { City } from '../../model/city.model';
import { CityStore } from '../../data-access/city.store';
import {
  FakeHttpService,
  randomCity,
} from '../../data-access/fake-http.service';
import { CardComponent } from '../../ui/card/card.component';
import { ListItemComponent } from '../../ui/list-item/list-item.component';

@Component({
  selector: 'app-city-card',
  template: `<app-card
    [list]="cities"
    (addNewClick)="onAddNewClick()"
    customClass="bg-light-blue">
    <img headingImage src="assets/img/student.webp" width="200px" />
    <ng-template #rowRef let-city>
      <app-list-item (deleteClick)="deleteCity(city.id)">
        {{ city.name }}
      </app-list-item>
    </ng-template>
  </app-card>`,
  standalone: true,
  styles: [
    `
      ::ng-deep .bg-light-blue {
        background-color: rgba(0, 0, 250, 0.1);
      }
    `,
  ],
  imports: [CardComponent, ListItemComponent],
})
export class CityCardComponent implements OnInit {
  cities: City[] = [];

  constructor(
    private http: FakeHttpService,
    private store: CityStore,
  ) {
    http.fetchCities$.subscribe((cities) => store.addAll(cities));
    store.cities$.subscribe((cities) => (this.cities = cities));
  }

  ngOnInit(): void {}

  onAddNewClick(): void {
    this.store.addOne(randomCity());
  }

  deleteCity(id: number): void {
    this.store.deleteOne(id);
  }
}
