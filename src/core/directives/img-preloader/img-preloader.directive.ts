// Example:
// <img img-preloader fadeTime="500" src="http://www.planwallpaper.com/static/images/Sparrows-Fly-HD-Wallpaper.jpg" alt="" />

import {Directive, ElementRef, OnInit, OnChanges, Input, SimpleChanges} from "@angular/core";

declare const jQuery: any;

@Directive({
  selector: '[img-preloader]'
})

export class ImgPreloaderDirective implements OnInit, OnChanges {

  private $el: any;
  @Input() public fadeTime: number = 1000;

  constructor(private el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  ngOnInit(): void {
    this.$el.hide();
    this.$el.after(this.getLoader());
    this.$el.on('load', () => {
      console.log('loaded!');
      this.$el.fadeIn(this.fadeTime);
      this.$el.next('i.fa-spin').remove();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    let fadeChanges = changes['fadeTime'];

    if (fadeChanges) {
      this.fadeTime = fadeChanges.currentValue;
    }
  }

  private getLoader(): string {
    return `<i class="fa fa-refresh fa-spin fa-lg fa-fw" style="font-size: 20px;margin: 0 auto;vertical-align: middle;text-align: center;"></i>`;
  }

}
