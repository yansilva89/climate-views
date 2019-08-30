import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { ClimatesViewComponent } from './components/climates-view/climates-view.component';

// Services
import { RequestsService } from './services/requests.service';
import { ClimateTodayComponent } from './components/climate-today/climate-today.component';

// NG MDC
import { MdcSelectModule, MdcMenuModule, MdcListModule, MdcFormFieldModule, MdcTextFieldModule, MdcButtonModule } from '@angular-mdc/web';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ClimatesViewComponent,
    ClimateTodayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MdcSelectModule,
    MdcMenuModule,
    MdcListModule,
    MdcFormFieldModule,
    MdcTextFieldModule,
    MdcButtonModule
  ],
  providers: [
    RequestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
