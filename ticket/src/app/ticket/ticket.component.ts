import { Component, OnInit } from '@angular/core';
import data from "src/assets/data.json";
import { MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {MatChipsModule} from '@angular/material/chips';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})

export class TicketComponent implements OnInit {
  displayedColumns: string[] = ['id', 'ticket', 'assignedto', 'status', "date", "action"];
  dataSource: any;
  data = data;
  constructor(public dialog: MatDialog) { }
  highestId: number = 6;
  ngOnInit() {
    this.dataSource = [...data];
    this.dataSource = data;
    this.data.forEach(item => {
      if (item.id > this.highestId) {
        this.highestId = item.id;
      }
    });
  }

//   getStatusClass(status: string): string {
//     switch (status) {
//         case 'Total Ticket':
//             return 'blue'; // Use the same class names as your buttons
//         case 'Pending Ticket':
//             return 'yellow';
//         case 'Open Ticket':
//             return 'green';
//         case 'Closed Ticket':
//             return 'red';
//         default:
//             return '';
//     }
// }
// getStatusClass(status: string): string {
//   switch (status) {
//       case 'Total Ticket':
//           return 'card1'; // Use the same class names as your buttons
//       case 'Pending Ticket':
//           return 'card2';
//       case 'Open Ticket':
//           return 'card3';
//       case 'Closed Ticket':
//           return 'card4';
//       default:
//           return '';
//   }
// }
  editTicket(element: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { isEdit: true, ticketData: element }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.findIndex((item: { id: any; }) => item.id === result.id);
        if (index !== -1) {
          this.dataSource.splice(index, 1, result);
          this.dataSource = [...this.dataSource];
        }
      }
    });
  }

  deleteTicket(element: any) {
    const index = this.dataSource.indexOf(element);
    if (index !== -1) {
      this.dataSource.splice(index, 1);
      this.dataSource = [...this.dataSource];
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { isEdit: false, ticketData: null }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.findIndex((item: { id: any; }) => item.id === result.id);
        if (index !== -1) {
          this.dataSource.splice(index, 1, result);
        }
        this.highestId++;
        result.id = this.highestId;
        result.date = result.date.toISOString();
        console.log(`Dialog result: ${result}`);
        this.dataSource = [...this.dataSource, result];
      }
    });
  }

  getPendingBtn(value: string) {
    let arr = []
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].status == value) {
        arr.push(this.data[i]);
      }
      this.dataSource = arr;

      if (value == "Total") {
        this.dataSource = [...this.data];
      }
    }
  }
}





