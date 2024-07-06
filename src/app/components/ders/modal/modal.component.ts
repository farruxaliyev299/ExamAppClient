import { ChangeDetectionStrategy, Component, inject, Input, model } from '@angular/core';

import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DialogData } from '../ders.module';
import { Operations } from '../../events';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  readonly dialogRef = inject(MatDialogRef<ModalComponent>);
  // readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  @Input() operationType?: Operations;

  readonly kod = model<string>();
  readonly ad = model<string>();
  readonly muellimAd = model<string>();
  readonly muellimSoyad = model<string>();
  readonly sinif = model<number>();

  Cancel(): void {
    this.dialogRef.close();
  }

  Create(): any{
    this.operationType = Operations.Create;
    return {
      kod: this.kod(),
      ad: this.ad(),
      muellimAd: this.muellimAd(),
      muellimSoyad: this.muellimSoyad(),
      sinif: this.sinif(),
      operationType: this.operationType
    }
  }
}
