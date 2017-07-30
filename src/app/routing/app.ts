import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "../app.component";
import {directiveRoutes} from "./app.directives";

const appRoutes: Routes = [
  ...directiveRoutes,
  { path: '', component: AppComponent},
  { path: '**', component: AppComponent }
];

export const appRouting = RouterModule.forRoot(appRoutes);
