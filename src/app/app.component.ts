import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  avatar: string = "open";
  passwordHide: boolean = true;
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  password: FormControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit() {
  }
  getEmailErrorMessage() {
    return this.email.hasError('required') ? '*Email required' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getPasswordErrorMessage() {
    return this.password.hasError('required') ? '*Password required' : '';
  }
  onChangeAvatar() {
    this.avatar = (this.password.value.length > 0) ? "close" : "open";
  }
}
