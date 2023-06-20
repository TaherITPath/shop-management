import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './src/app/area/admin/admin.component';
import { UserComponent } from './src/app/area/user/user.component';
import { AdminDashboardComponent } from './src/app/area/admin/modules/admin-dashboard/admin-dashboard.component';
import { EmployeeListComponent } from './src/app/area/admin/modules/employee/employee-list/employee-list.component';
import { AdminLoginComponent } from './common/admin-login/admin-login.component';
import { authGuard } from './services/auth.guard';
import { EmployeeAddUpdateComponent } from './src/app/area/admin/modules/employee/employee-add-update/employee-add-update.component';

const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[authGuard],
    children:[{
       path:'dashboard',
      component:AdminDashboardComponent,
      canActivate:[authGuard]
    },
    {
      path:'employee',
      component:EmployeeListComponent,
      canActivate:[authGuard]
    },
    {
      path:'employee/add',
      component:EmployeeAddUpdateComponent,
      canActivate:[authGuard]
    },
    {
      path:'employee/edit/:id',
      component: EmployeeAddUpdateComponent,
      canActivate:[authGuard]
    }]
},
{
  path:'',
  component:AdminLoginComponent
},
  {
    path:'**',
    component:UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
