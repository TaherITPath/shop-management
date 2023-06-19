import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './modules/admin-dashboard/admin-dashboard.component';
import { EmployeeListComponent } from './modules/employee/employee-list/employee-list.component';
import { EmployeeAddUpdateComponent } from './modules/employee/employee-add-update/employee-add-update.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { AdminComponent } from './admin.component';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    AdminDashboardComponent,
    EmployeeListComponent,
    EmployeeAddUpdateComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatIconModule
  ],
  exports:[
    EmployeeListComponent,
    EmployeeAddUpdateComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    AdminComponent,
    MatIconModule
  ]
})
export class AdminModule { }
