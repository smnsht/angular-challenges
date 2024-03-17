import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyCompuPipe } from './heavy-compu.pipe';

@Component({
  standalone: true,
  imports: [NgFor, HeavyCompuPipe],
  selector: 'app-root',
  template: `
    <div *ngFor="let person of persons; let index = index">
      {{ person | heavyCompu:index }}
    </div>
  `,
})
export class AppComponent {
  persons = ['toto', 'jack'];  
}
