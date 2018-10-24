import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from './icons/icons.module';

@NgModule({
  imports: [
    CommonModule,
    IconsModule
  ],
  declarations: [],
  exports: [
    IconsModule
  ]
})
export class SharedModule { }
