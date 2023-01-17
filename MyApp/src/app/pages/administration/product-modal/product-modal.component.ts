import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/shared/interface/products.interface';
import { TodosService } from '../../shop/shared/services/products2.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProductModalComponent>,
    private todosService: TodosService,
  ) {}
  // @Output() handleClose = new EventEmitter()

  form: FormGroup
  close() {
    this.dialogRef.close()
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      price: new FormControl( '', [Validators.required, Validators.minLength(4)]),
      description: new FormControl('', [Validators.required, Validators.minLength(4)])
    })
  }

  submit() {
    console.log(this.form);
    const user: any = {
      name: this.form.value.name,
      price: +this.form.value.price,
      description: this.form.value.description
    }
    console.log(user);
    this.todosService.addTodo(user).subscribe((data) => console.log('kod',data))
  }

}
