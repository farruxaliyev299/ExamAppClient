import { Component, ViewChild } from '@angular/core';
import { Shagird } from '../../models/shagird';
import { ShagirdClientService } from '../../services/shagird-client.service';
import { MatTableDataSource } from '@angular/material/table';
import { PopupComponent } from './popup/popup.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-shagird',
  templateUrl: './shagird.component.html',
  styleUrl: './shagird.component.scss'
})
export class ShagirdComponent {
  //#region List

  public displayedColumns: string[] = ['Nomre', 'Ad', 'Soyad', 'Sinif', 'Actions'];

  public dataSource: MatTableDataSource<any>;

  //#endregion
}
