import {Routes} from "@angular/router";
import {HasRolePage} from "../pages/index";
import {DirectivesPage} from "../pages/index";

export const directiveRoutes: Routes = [
  { path: 'directives', component: DirectivesPage },
  { path: 'directives/has-role', component: HasRolePage }
];
