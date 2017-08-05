// Example:
// <div [routeRedirect]=['/home']> ... Some content... </div>

import {Directive, Input, OnChanges, SimpleChanges, HostListener} from "@angular/core";
import {Router} from "@angular/router";

@Directive({
    selector: '[routeRedirect]'
})

export class RouteRedirectDirective implements OnChanges {

    @Input() public routeRedirect: any[];

    constructor(private router: Router) {}

    ngOnChanges(changes: SimpleChanges): void {
        let routeChanges = changes['routeRedirect'];

        if (routeChanges) {
            this.routeRedirect = routeChanges.currentValue;
        }
    }

    @HostListener('click', ['$event.target'])
    public onClick(): void {
      if (this.routeRedirect != null) {
        if (this.routeRedirect.length) {
          this.router.navigate(this.routeRedirect);
        }
      }
    }

}
