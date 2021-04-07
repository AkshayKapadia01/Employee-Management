import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

const MaterialComponents = [
  MatTableModule,
  MatCardModule,
  MatButtonModule
]


@NgModule({
  
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
