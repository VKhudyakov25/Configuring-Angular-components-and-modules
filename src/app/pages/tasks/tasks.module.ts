import { TasksComponent } from './tasks.component';
import { DxDataGridModule } from 'devextreme-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TasksComponent],
  imports: [CommonModule, DxDataGridModule],
  providers: [],
  exports: [TasksComponent],
})
export class TasksModule {}
