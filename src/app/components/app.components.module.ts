import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {PageListComponent} from "./page-list/page-list.component";

@NgModule({
  declarations: [
    PageListComponent
  ],
  exports: [
    PageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ]
})
export class AppComponentsModule { }
