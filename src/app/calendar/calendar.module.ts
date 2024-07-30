// src/app/calendar/calendar.module.ts
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

const routes: Routes = [
  { path: '', component: CalendarViewComponent }
];

@NgModule({
  declarations: [
    AppointmentFormComponent
  ],
  imports: [
    CalendarViewComponent,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    DragDropModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  exports: [
    CalendarViewComponent,
    AppointmentFormComponent
  ]
})
export class CalendarModule { }
