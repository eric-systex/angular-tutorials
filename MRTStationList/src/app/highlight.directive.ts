import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

    @Input('appHighlight') highlightColor: string;

    @HostListener('mouseenter') onMouseEnter() {
      this.highlight(this.highlightColor || 'red');
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null);
    }

    constructor(private el: ElementRef) { }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
