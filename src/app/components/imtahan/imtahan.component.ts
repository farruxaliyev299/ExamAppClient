import { Component, ViewChild } from '@angular/core';
import { Imtahan } from '../../models/imtahan';
import { ImtahanClientService } from '../../services/imtahan-client.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-imtahan',
  templateUrl: './imtahan.component.html',
  styleUrl: './imtahan.component.scss'
})
export class ImtahanComponent {
  
  //#region List

  public displayedColumns: string[] = ['Nomre', 'Ders Kod', 'Shagird Nomre', 'Tarix', 'Qiymet', 'Actions'];

  public dataSource!: MatTableDataSource<any>;

  //#endregion
}
