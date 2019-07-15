import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { HeaderModule } from 'src/app/components/header/header.module';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class ListModule { }
