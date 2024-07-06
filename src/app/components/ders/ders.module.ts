import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DersComponent } from './ders.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './popup/popup.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';


export interface DialogData {
  kod: string;
  ad: string;
  muellimAd: string;
  muellimSoyad: string;
  sinif: number;
}



@NgModule({
  declarations: [
    DersComponent,
    ListComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: "", component: DersComponent }
    ])
  ]
})
export class DersModule { }
