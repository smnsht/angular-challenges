import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { City } from '../model/city.model';

@Injectable({
  providedIn: 'root',
})
export class CityStore {
  private cities = new BehaviorSubject<City[]>([]);
  cities$ = this.cities.asObservable();

  addAll(cities: City[]) {
    this.cities.next(cities);
  }

<<<<<<< HEAD
  addOne(city: City) {
    this.cities.next([...this.cities.value, city]);
  }

  deleteOne(id: number) {
    this.cities.next(this.cities.value.filter((t) => t.id !== id));
=======
  addOne(student: City) {
    this.cities.next([...this.cities.value, student]);
  }

  deleteOne(id: number) {
    this.cities.next(this.cities.value.filter((s) => s.id !== id));
>>>>>>> 17108c32343a872f6320c50f3ecceac619923617
  }
}
