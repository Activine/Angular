import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }
  public visible: boolean


  ngOnInit(): void {
  }

  goToCart() {
    this.router.navigate(['/cart'], { relativeTo: this.activatedRoute });
    this.visible = false;
  }

  goHome() {
    this.router.navigate([''], { relativeTo: this.activatedRoute });
  }

  goBack() {
    this.router.navigate(['/products'], { relativeTo: this.activatedRoute });
  }
}
