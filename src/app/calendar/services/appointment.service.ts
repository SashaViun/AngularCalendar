// appointment.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Appointment {
  id: number;
  title: string;
  date: string;
  time: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointmentsSubject = new BehaviorSubject<Appointment[]>([]);
  appointments$ = this.appointmentsSubject.asObservable();

  private appointments: Appointment[] = [];

  getAppointments() {
    return this.appointments$;
  }

  addAppointment(appointment: Appointment) {
    this.appointments.push({ ...appointment, id: this.appointments.length + 1 });
    this.appointmentsSubject.next(this.appointments);
  }

  deleteAppointment(id: number) {
    this.appointments = this.appointments.filter(a => a.id !== id);
    this.appointmentsSubject.next(this.appointments);
  }
}
