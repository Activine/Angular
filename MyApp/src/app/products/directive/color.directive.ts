import { Directive, ElementRef, Input, OnInit } from "@angular/core";
import { Color } from "../enum/color.enum";

@Directive({
  selector: '[price]',
})
export class ColorDirective implements OnInit {
  @Input('price') price: number = 0

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = Color.color1;
  }

  public setColor(): void {
    if(this.price > 5000) {
      this.el.nativeElement.style.color = Color.color2;
      return;
    }
    if(this.price > 3000) {
      this.el.nativeElement.style.color = Color.color3;
      return;
    }
  }

  ngOnInit(): void {
    this.setColor()
  }
}
