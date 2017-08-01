import { Component } from '@angular/core';
import {PageItem} from "../../../models/index";

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome.html'
})

export class WelcomePage {

  public items: PageItem[] = [];

  constructor(){
    this.items = [
      { route: '/directives', title: 'directives' }
    ];
  }

}
