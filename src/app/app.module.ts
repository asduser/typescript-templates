import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomElementsModule } from "../core/custom.elements.module";
import { appRouting } from "./routing/app";

/* Pages */
import {HasRolePage} from "./pages/has-role/has-role";
import {WelcomePage} from "./pages/system/welcome/welcome";
import {NotFoundPage} from "./pages/system/not-found/not-found";

@NgModule({
  declarations: [
    AppComponent,
    HasRolePage,
    WelcomePage,
    NotFoundPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting,
    CustomElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
