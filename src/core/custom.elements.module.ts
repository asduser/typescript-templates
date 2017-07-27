import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HasRoleDirective} from "./directives/has-role/has-role.directive";

@NgModule({
  declarations: [
    HasRoleDirective
  ],
  exports: [
    HasRoleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: []
})

export class CustomElementsModule { }
