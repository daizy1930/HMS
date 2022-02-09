import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [
    AdminSidebarComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
