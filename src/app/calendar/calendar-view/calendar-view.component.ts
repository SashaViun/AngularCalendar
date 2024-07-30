// calendar-view.component.ts
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { Appointment, AppointmentService } from '../services/appointment.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss'],
  standalone: true,
  imports: [DragDropModule]
})
export class CalendarViewComponent implements OnInit {
  appointments$: Observable<Appointment[]> | undefined

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.appointments$ = this.appointmentService.getAppointments();
  }

  onDelete(id: number): void {
    this.appointmentService.deleteAppointment(id);
  }

  onMove(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
