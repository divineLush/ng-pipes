import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  dateInput: string = '';
  amount: string = '';
  height: string = '';
  miles: string = '';
  person = { name: 'John', age: 92 };
}
