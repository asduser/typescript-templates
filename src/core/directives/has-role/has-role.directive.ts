import {Directive, Input, ElementRef, OnChanges, SimpleChanges, ViewContainerRef, TemplateRef, OnInit} from "@angular/core";

@Directive({
  selector: '[hasRole]'
})
export class HasRoleDirective implements OnInit, OnChanges {

  @Input() hasRole:Array<string> = [];
  private role:string;

  constructor(private elementRef:ElementRef,
              private viewContainerRef:ViewContainerRef,
              private template:TemplateRef<any>
  ) {}

  ngOnInit() {}

  ngOnChanges(changes:SimpleChanges):void {
    let hasRoleChanges = changes['hasRole'];
    if (hasRoleChanges) {
      this.hasRole = hasRoleChanges.currentValue;
      this.update();
    }
  }

  private update():void {
    // in the real app, should be set by the real application user's role
    this.role = 'user';

    this.checkRoles(this.role);
  }

  private checkRoles(userRole:string) {
    if (!this.hasRole.length || !!~this.hasRole.indexOf(userRole)) {
      this.createView();
    } else {
      this.clearView();
    }
  }

  private createView():void {
    this.viewContainerRef.createEmbeddedView(this.template);
  }

  private clearView():void {
    this.viewContainerRef.clear();
  }

}
