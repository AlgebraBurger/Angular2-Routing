import { Component } from '@angular/core';
import { Employee } from './employee';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  title = '...';
  employees = Employees;
}



const Employees : Employee[] = [
    { id: 1, FullName : "Julius Bacosa" },
    { id: 1, FullName : "Elvira Bacosa" },
    { id: 1, FullName : "Roberto Bacosa" }
];
