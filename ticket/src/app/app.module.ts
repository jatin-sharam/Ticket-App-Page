import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { DialogComponent } from './dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {Component} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';




@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule,
    MatCardModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSelectModule,
    NgIf,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
