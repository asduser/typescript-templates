import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomElementsModule } from "../core/custom.elements.module";
import { appRouting } from "./routing/app";

/* Pages */
import {DirectivesPage, HasRolePage} from "./pages/index";
import {NotFoundPage, WelcomePage} from "./pages/index";

/* Components */
import {PageListComponent} from "./components/index";

@NgModule({
  declarations: [
    AppComponent,
    DirectivesPage,
    HasRolePage,
    WelcomePage,
    NotFoundPage,
    PageListComponent
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
