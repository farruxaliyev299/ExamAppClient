import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DersModule } from './ders/ders.module';
import { ImtahanModule } from './imtahan/imtahan.module';
import { ShagirdModule } from './shagird/shagird.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DersModule,
    ImtahanModule,
    ShagirdModule
  ]
})
export class ComponentsModule { }
