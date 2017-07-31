import {Routes, RouterModule} from "@angular/router";

import {directiveRoutes} from "./app.directives";

/* Pages */
import {NotFoundPage} from "../pages/system/not-found/not-found";
import {WelcomePage} from "../pages/system/welcome/welcome";

const appRoutes: Routes = [
  { path: '', component: WelcomePage },
  { path: 'app', component: WelcomePage },
  ...directiveRoutes,
  { path: '404', component: NotFoundPage },
  { path: '**', redirectTo: '/404' },
];

export const appRouting = RouterModule.forRoot(appRoutes);
