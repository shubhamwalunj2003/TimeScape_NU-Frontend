import { Component } from '@angular/core';

@Component({
  selector: 'app-leave-exceptions',
  templateUrl: './leave-exceptions.component.html',
  styleUrls: ['./leave-exceptions.component.scss']
})
export class LeaveExceptionsComponent {
  leaveTypes = [
    { type: 'Optional', used: 1, total: 2 },
    { type: 'Casual', used: 5, total: 7 },
    { type: 'Sick', used: 8, total: 12 },
    { type: 'Privilege', used: 4, total: 70 }
  ];
}
