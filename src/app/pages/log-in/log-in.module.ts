import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component';
import { LogInRoutingModule } from './log-in.router.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LogInComponent],
  imports: [CommonModule, LogInRoutingModule, FormsModule],
  exports: [LogInComponent],
})
export class LogInModule {}
