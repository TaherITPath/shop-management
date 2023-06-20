import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './modules/admin-dashboard/admin-dashboard.component';
import { EmployeeListComponent } from './modules/employee/employee-list/employee-list.component';
import { EmployeeAddUpdateComponent } from './modules/employee/employee-add-update/employee-add-update.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { AdminComponent } from './admin.component';
import {MatIconModule} from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTreeModule} from '@angular/material/tree';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { JwtModule } from '@auth0/angular-jwt';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeDialogBoxComponent } from './modules/employee/employee-dialog-box/employee-dialog-box.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    EmployeeListComponent,
    EmployeeAddUpdateComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    AdminComponent,
    EmployeeDialogBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatTreeModule,
    MatTabsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  exports:[
    EmployeeListComponent,
    EmployeeAddUpdateComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    AdminComponent,
    MatIconModule,
    MatTableModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatTreeModule,
    MatTabsModule,
    MatDialogModule
  ]
})
export class AdminModule { }
