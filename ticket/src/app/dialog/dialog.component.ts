import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog';
import { TicketComponent } from '../ticket/ticket.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent {
  // ticket: string[] = ['Open', 'Pending', 'Closed'];
  status: any[] = [{ value: 'Open' }, { value: 'Closed' }, { value: 'Pending' },{value: 'Total'}]
  // constructor(public dialogRef: MatDialogRef<TicketComponent>, @Inject(MAT_DIALOG_DATA) public data: any){ 
  //   if (data.isEdit) {
  //     this.ticketData.setValue({
  //         ticket: data.ticketData.ticket,
  //         assignedto: data.ticketData.assignedto,
  //         date: new Date(data.ticketData.date),
  //         status: data.ticketData.status
  //     });
  //  }else{
  //   this.ticketData.setValue({
  //     ticket: null,
  //     assignedto: null,
  //     date: null, // Set to null for add mode
  //     status: null
  // });
  //  }
  // }
  //   constructor(public dialogRef: MatDialogRef<TicketComponent>, @Inject(MAT_DIALOG_DATA) public data: any){ 
  //     if (data.isEdit) {
  //         this.ticketData.setValue({
  //             ticket: data.ticketData.ticket,
  //             assignedto: data.ticketData.assignedto,
  //             date: new Date(data.ticketData.date),
  //             status: data.ticketData.status
  //         });
  //     } else {
  //         this.ticketData.setValue({
  //             ticket: null,
  //             assignedto: null,
  //             date: null, // Set to null for add mode
  //             status: null
  //         });
  //     }
  // }
  // constructor(public dialogRef: MatDialogRef<TicketComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  //   this.ticketData.setValue({
  //       ticket: data.isEdit ? data.ticketData.ticket : null,
  //       assignedto: data.isEdit ? data.ticketData.assignedto : null,
  //       date: data.isEdit ? new Date(data.ticketData.date) : null,
  //       status: data.isEdit ? data.ticketData.status : null
  //   });

  // }
  constructor(public dialogRef: MatDialogRef<TicketComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    const dateValue = data.isEdit ? new Date(data.ticketData.date) : null;
    this.ticketData.setValue({
      ticket: data.isEdit ? data.ticketData.ticket : '',
      assignedto: data.isEdit ? data.ticketData.assignedto : '',
      date: dateValue,
      status: data.isEdit ? data.ticketData.status : ''
    });
  }

  ticketData = new FormGroup({
    ticket: new FormControl(''),
    assignedto: new FormControl(''),
    date: new FormControl(),
    status: new FormControl(''),
  });

  // selected = 'none';
  onform(action: string) {
    if (action === 'save') {
      if (this.data.isEdit) {
        this.dialogRef.close({ ...this.ticketData.value, id: this.data.ticketData.id });
      } else {
        this.dialogRef.close(this.ticketData.value);
      }
    } else {
      this.dialogRef.close();
    }
  }
}
