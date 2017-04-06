import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/transaction.component';
import{SearchBarComponent} from './transaction/SearchBar/search-bar.component';
import {Pagination} from './transaction/paginations/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    SearchBarComponent,
    Pagination
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
