import { Component } from '@angular/core';
import {PageItem} from "../../models/index";

@Component({
  selector: 'directives-page',
  templateUrl: './directives.html'
})

export class DirectivesPage {

  public items: PageItem[] = [
    { route: '/directives/has-role', title: 'hasRole' }
  ];

}
