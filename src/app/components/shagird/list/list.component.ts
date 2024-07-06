import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Shagird } from '../../../models/shagird';
import { MatTableDataSource } from '@angular/material/table';
import { ShagirdClientService } from '../../../services/shagird-client.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: MatTableDataSource<any>;

  constructor(
    private clientService: ShagirdClientService,
    private _dialog: MatDialog){
  }

  ngOnInit(): void {
    this.fetch();
  }

  openAddForm(): void {
    const dialogRef = this._dialog.open(PopupComponent, { data: { data: undefined, lookMode: false } });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.fetch();
        }
      },
    });
  }

  openEditForm(data: any): void{
    const dialogRef = this._dialog.open(PopupComponent, { data });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.fetch();
        }
      },
    });
  }

  openLookForm(data: any): void{
    const dialogRef = this._dialog.open(PopupComponent, { data });
  }

  public fetch(): void {
    this.clientService
      .get()
      .subscribe((data) => {
        if (data) {
          this.dataSource = new MatTableDataSource(data);
        }
      })
  }

  public delete(nomre: number): void{
    this.clientService
    .delete(nomre)
    .subscribe({
      next : (rs) => {
        alert("Şagird silindi!");
        this.fetch();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
