import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
  selector: '[price]',
})
export class ColorDirective implements OnInit {
  @Input('price') price: number = 0

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'green'
  }

  setColor() {
    if(this.price > 5000) {
      this.el.nativeElement.style.color = 'red';
      return
    }
    if(this.price > 3000) {
      this.el.nativeElement.style.color = 'gold';
      return
    }
  }

  ngOnInit(): void {
    this.setColor()
  }
}
