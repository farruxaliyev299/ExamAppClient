import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImtahanClientService } from '../../../services/imtahan-client.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DersClientService } from '../../../services/ders-client.service';
import { ShagirdClientService } from '../../../services/shagird-client.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent implements OnInit {
  imtahanForm: FormGroup;

  public shagirdNomreler: Map<number, string> = new Map();
  public dersKodlar: Map<string, string> = new Map();

  dersSelectOptions: { kod: string; ad: string }[] = [];
  shagirdSelectOptions: { nomre: number; ad: string }[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private clientService: ImtahanClientService,
    private dersClientService: DersClientService,
    private shagirdClientService: ShagirdClientService,
    private _imtahanDialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.imtahanForm = _formBuilder.group({
      nomre: [null],
      dersKod: ['', Validators.required],
      shagirdNomre: [null, Validators.required],
      tarix: [null, Validators.required],
      qiymet: [null, [Validators.required, Validators.min(1), Validators.max(9)]],
    })
  }

  ngOnInit(): void {
    this.onDersSelectOpened();
    this.onShagirdSelectOpened();

    this.imtahanForm.get("nomre").disable();

    if(this.data.data && this.data.lookMode){
      this.imtahanForm.get('dersKod').disable();
      this.imtahanForm.get('shagirdNomre').disable();
    }
    this.imtahanForm.patchValue(this.data.data);
  }

  preventDefault(event: Event): void {
    event.preventDefault();
    // Add any custom logic you need
  }


  onFormSubmit(): void {
    if (this.imtahanForm.valid) {
      if (this.data.data) {
        this.update()
      }
      else {
        this.add();
      }
    }
  }

  onDersSelectOpened(): void {
    this.dersClientService
      .get()
      .subscribe({
        next: (val) => {
          val.forEach(ders => this.dersKodlar.set(ders.kod, ders.ad));
        }
      })
  };

  onShagirdSelectOpened(): void {
    this.shagirdClientService
      .get()
      .subscribe({
        next: (val) => {
          val.forEach(shagird => this.shagirdNomreler.set(shagird.nomre, shagird.ad));
        }
      })
  };

  add(): void {
    this.clientService
      .add(this.imtahanForm.value)
      .subscribe({
        next: (val) => {
          alert('Imtahan yaradıldı!');
          this._imtahanDialogRef.close(true);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  update(): void {
    this.imtahanForm.get("nomre").enable();
    this.clientService
      .update(this.imtahanForm.value)
      .subscribe({
        next: (val) => {
          alert('Ders məlumatı təzələndi!');
          this._imtahanDialogRef.close(true);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
}
