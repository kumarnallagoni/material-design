import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
  MatSelectModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';


import {AppComponent} from './app.component';
import {GridLayoutComponent} from './grid-layout/grid-layout.component';
import {AppRoutingModule} from './/app-routing.module';
import {GridDynamicComponent} from './grid-dynamic/grid-dynamic.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TabsComponent} from './tabs/tabs.component';
import {SnackbarComponent} from './snackbar/snackbar.component';


@NgModule({
  declarations: [
    AppComponent,
    GridLayoutComponent,
    GridDynamicComponent,
    DashboardComponent,
    TabsComponent,
    SnackbarComponent
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
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    AppRoutingModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SnackbarComponent]
})
export class AppModule {
  showFiller = false;
}
