import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/interface/products.interface';
import { AuthService } from '../shared/services/auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  // matcher = new MyErrorStateMatcher();
  constructor(
    private auth: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  form: FormGroup
  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl( '', [Validators.required, Validators.minLength(4)])
    })
  }

  submit() {
    console.log(this.form);
    const user: User = {
      username: this.form.value.username,
      password: this.form.value.password
    }

    console.log(user);
    localStorage.setItem('username', this.form.value.username);
    this.auth.login(user).subscribe((data: any) => console.log(data))
    // console.log(this.auth.token);


  }
  // .subscribe(() => {
  //   this.form.reset();
  //   this.router.navigate(['/administration/users'])
  // })
  showProd() {
    setTimeout(() => this.router.navigate(['/administration/products/'], { relativeTo: this.activatedRoute }),1000)

  }
}
