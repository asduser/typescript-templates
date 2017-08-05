import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HasRoleDirective} from "./directives/has-role/has-role.directive";
import {AnchorLinkDirective} from "./directives/anchor-link/anchor-link.directive";
import {RouteRedirectDirective} from "./directives/route-redirect/route-redirect.directive";
import {ImgPreloaderDirective} from "./directives/img-preloader/img-preloader.directive";

@NgModule({
  declarations: [
    HasRoleDirective,
    AnchorLinkDirective,
    RouteRedirectDirective,
    ImgPreloaderDirective
  ],
  exports: [
    HasRoleDirective,
    AnchorLinkDirective,
    RouteRedirectDirective,
    ImgPreloaderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: []
})

export class CustomElementsModule { }
