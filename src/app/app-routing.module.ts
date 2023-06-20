import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './area/admin/admin.component';
import { UserComponent } from './area/user/user.component';
import { AdminDashboardComponent } from './area/admin/modules/admin-dashboard/admin-dashboard.component';
import { EmployeeListComponent } from './area/admin/modules/employee/employee-list/employee-list.component';
import { AdminLoginComponent } from './common/admin-login/admin-login.component';
import { authGuard } from './services/auth.guard';
import { EmployeeAddUpdateComponent } from './area/admin/modules/employee/employee-add-update/employee-add-update.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[authGuard],
    children:[{
       path:'',
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
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
