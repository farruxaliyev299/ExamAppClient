import { ChangeDetectionStrategy, Component, Input, OnInit, Signal, ViewChild, inject, model, signal } from '@angular/core';
import { Ders } from '../../models/ders';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { DersClientService } from '../../services/ders-client.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-ders',
  templateUrl: './ders.component.html',
  styleUrl: './ders.component.scss',
})
export class DersComponent {
  
  //#region List

  public dataSource: MatTableDataSource<any>;

  public displayedColumns: string[] = ['Kod', 'Ad', 'Muellim Ad', 'Muellim Soyad', "Sinif", "Actions"];

  //#endregion

  
}
