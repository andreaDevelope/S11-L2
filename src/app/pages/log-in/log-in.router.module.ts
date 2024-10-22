import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in.component';
import { NgModule } from '@angular/core';

const route: Routes = [{ path: '', component: LogInComponent }];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class LogInRoutingModule {}
