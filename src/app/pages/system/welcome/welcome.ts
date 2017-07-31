import { Component } from '@angular/core';

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome.html'
})

export class WelcomePage {

  public items: RouteItem[] = [];

  constructor(){
    this.items = [
      { route: '/directives', title: 'hasRole directive' }
    ];
  }

}

type RouteItem = {
  route: string,
  title: string
}
