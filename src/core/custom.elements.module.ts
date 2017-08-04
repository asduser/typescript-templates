import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HasRoleDirective} from "./directives/has-role/has-role.directive";
import {AnchorLinkDirective} from "./directives/anchor-link/anchor-link.directive";

@NgModule({
  declarations: [
    HasRoleDirective,
    AnchorLinkDirective
  ],
  exports: [
    HasRoleDirective,
    AnchorLinkDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: []
})

export class CustomElementsModule { }
