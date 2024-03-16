import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { City } from '../../model/city.model';
import { FakeHttpService, randomCity } from '../../data-access/fake-http.service';
import { ListItemComponent } from '../../ui/list-item/list-item.component';
import { CityStore } from '../../data-access/city.store';

@Component({
  selector: 'app-city-card',
  template: `<app-card
    [list]="cities"  
    (add)="addCity()"
    customClass="bg-light-blue"
  >
    <img cardImage src="assets/img/city.png" width="200px" />
    <style type="text/css" cardStyle>
      
    </style>
    <ng-template #rowRef let-city>
      <app-list-item [item]="city" (delete)="deleteCity($event)">
        {{ city.name }}
      </app-list-item>
    </ng-template>
  </app-card>`,
  styles: [' ::ng-deep .bg-light-blue { background-color: rgba(0, 0, 250, 0.1); } '],
  standalone: true,
  imports: [CardComponent, ListItemComponent],
})
export class CityCardComponent implements OnInit {
  cities: City[] = [];  

  constructor(private http: FakeHttpService, private store: CityStore) {}

  ngOnInit(): void {
    this.http.fetchCities$.subscribe((c) => this.store.addAll(c));

    this.store.cities$.subscribe((c) => this.cities = c)
  }

  addCity(): void {    
    this.store.addOne(randomCity())
  }

  deleteCity(city: City): void {
    this.store.deleteOne(city.id)
  }
}
