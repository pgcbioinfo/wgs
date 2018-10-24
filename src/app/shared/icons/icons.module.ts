import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconHome, IconList, IconMap, IconUsers, IconChevronLeft, IconChevronRight, IconMoreHorizontal } from 'angular-feather';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    IconHome,
    IconList,
    IconMap,
    IconUsers,
    IconChevronLeft,
    IconChevronRight,
    IconMoreHorizontal
  ],
  declarations: []
})
export class IconsModule { }
