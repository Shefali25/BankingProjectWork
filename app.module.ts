import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PendinglistComponent } from './pendinglist/pendinglist.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerDetailService } from './Service/customerDetailService';
import { AllotadminComponent } from './allotadmin/allotadmin.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BeneficiaryService } from './Service/beneficiaryService';


@NgModule({
  declarations: [
    AppComponent,
    PendinglistComponent,
    AllotadminComponent,
    BeneficiaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CustomerDetailService,BeneficiaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
