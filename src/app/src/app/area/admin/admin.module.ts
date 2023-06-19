import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './modules/admin-dashboard/admin-dashboard.component';
import { EmployeeListComponent } from './modules/employee/employee-list/employee-list.component';
import { EmployeeAddUpdateComponent } from './modules/employee/employee-add-update/employee-add-update.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    EmployeeListComponent,
    EmployeeAddUpdateComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
