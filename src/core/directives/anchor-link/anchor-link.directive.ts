import {Directive, Input, ElementRef, HostListener, OnChanges, SimpleChanges} from "@angular/core";

declare let jQuery: any;

@Directive({
  selector: '[anchor-link]'
})

export class AnchorLinkDirective implements OnChanges {

  @Input() public element: string;
  @Input() public topOffset: number = 0;

  constructor(
    private elementRef : ElementRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    let elementChanges = changes['element'];
    let topOffsetChanges = changes['topOffset'];

    if (elementChanges) {
      this.element = elementChanges.currentValue;
    }
    if (topOffsetChanges) {
      this.topOffset = topOffsetChanges.currentValue;
    }
  }

  @HostListener('click', ['$event.target'])
  public onClick() {
    jQuery('html,body').animate({ scrollTop: jQuery(this.element).offset().top - this.topOffset}, 'slow');
  }

}
