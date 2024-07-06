import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DersComponent } from './components/ders/ders.component';
import { ShagirdComponent } from './components/shagird/shagird.component';
import { ImtahanComponent } from './components/imtahan/imtahan.component';

const routes: Routes = [
  { path: "ders", component: DersComponent },
  { path: "shagird", component: ShagirdComponent },
  { path: "imtahan", component: ImtahanComponent },

  { path: "**", redirectTo: "ders" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
