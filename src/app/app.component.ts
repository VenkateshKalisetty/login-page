import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  avatar: string = "open";
  passwordHide: boolean = true;
  crazyForm: FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.crazyForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  get controls() {
    return this.crazyForm.controls;
  }
  onChangeAvatar() {
    this.avatar = (this.controls.password.value.length > 0) ? "close" : "open";
  }
  onFormSubmit() {
    if(this.crazyForm.valid) {
      console.log(this.crazyForm.value)
    }
  }
}
