import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ShagirdClientService } from '../../../services/shagird-client.service';
import { MatTableDataSource } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent implements OnInit{
  shagirdForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private clientService: ShagirdClientService,
    private _shagirdDialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
    this.shagirdForm = _formBuilder.group({
      nomre: [null, [Validators.required, Validators.min(0), Validators.max(99999)]],
      ad: ['', [Validators.required]],
      soyad: ['', [Validators.required]],
      sinif: [null, [Validators.required, Validators.min(1), Validators.max(11)]]
    });
  }

  ngOnInit(): void {
    if(this.data.data && !this.data.lookMode){
      this.shagirdForm.get("nomre").disable();
    }
    this.shagirdForm.patchValue(this.data.data);
  }

  onFormSubmit(): void{
    if(this.shagirdForm.valid){
      if(this.data.data){
        this.update()
      }
      else{
        this.add();
      }
    }
  }

  add(): void {
    this.clientService
      .add(this.shagirdForm.value)
      .subscribe({
        next: (val) => {
          alert('Şagird yaradıldı!');
          this._shagirdDialogRef.close(true);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error);
          alert(err.error.error);
        }
      });
  }

  update(): void{
    this.shagirdForm.get('nomre').enable();
    this.clientService
    .update(this.shagirdForm.value)
    .subscribe({
      next: (val) => {
        alert('Ders məlumatı təzələndi!');
        this._shagirdDialogRef.close(true);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
