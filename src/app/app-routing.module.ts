import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {GridLayoutComponent} from './grid-layout/grid-layout.component';
import {GridDynamicComponent} from './grid-dynamic/grid-dynamic.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TabsComponent} from "./tabs/tabs.component";

const appRoutes: Routes = [
  {path: '', component: GridDynamicComponent},
  {path: 'grid', component: GridLayoutComponent},
  {path: 'griddynamic', component: GridDynamicComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'tabs', component: TabsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
