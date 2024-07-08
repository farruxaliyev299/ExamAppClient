import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DersClientService } from '../../../services/ders-client.service';
import { Ders } from '../../../models/ders';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from '../../../services/common/notification.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent implements OnInit {
  dersForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private clientService: DersClientService,
    private _dersDialogRef: MatDialogRef<PopupComponent>,
    private _notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dersForm = _formBuilder.group({
      kod: ['', [Validators.required, Validators.maxLength(3)]],
      ad: ['', [Validators.required]],
      muellimAd: ['', [Validators.required]],
      muellimSoyad: ['', [Validators.required]],
      sinif: [null, [Validators.required, Validators.min(1), Validators.max(11)]]
    });
  }

  ngOnInit(): void {
    if (this.data.data && !this.data.lookMode) {
      this.dersForm.get("kod").disable();
    }
    this.dersForm.patchValue(this.data.data);
  }

  onFormSubmit(): void {
    if (this.dersForm.valid) {
      if (this.data.data) {
        this.update()
      }
      else {
        this.add();
      }
    }
  }

  add(): void {
    this.clientService
      .add(this.dersForm.value)
      .subscribe({
        next: (val) => {
          this._notificationService.sendNotification('Ders yaradildi!', 'Oldu');
          this._dersDialogRef.close(true);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  update(): void {
    this.dersForm.get('kod').enable();
    this.clientService
      .update(this.dersForm.value)
      .subscribe({
        next: (val) => {
          this._notificationService.sendNotification('Ders məlumatı təzələndi!', 'Oldu');
          this._dersDialogRef.close(true);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
}
