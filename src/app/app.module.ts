import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';


import {AppComponent} from './app.component';
import {GridLayoutComponent} from './grid-layout/grid-layout.component';
import {AppRoutingModule} from './/app-routing.module';
import {GridDynamicComponent} from './grid-dynamic/grid-dynamic.component';
import {DashboardComponent} from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    GridLayoutComponent,
    GridDynamicComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatDividerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  showFiller = false;
}
