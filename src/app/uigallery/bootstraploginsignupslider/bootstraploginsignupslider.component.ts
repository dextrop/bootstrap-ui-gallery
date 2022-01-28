import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bootstraploginsignupslider',
  templateUrl: './bootstraploginsignupslider.component.html',
  styleUrls: ['./bootstraploginsignupslider.component.css']
})
export class BootstraploginsignupsliderComponent implements OnInit {

  email = "";
  password = "";
  
  login_email = ""
  login_password = ""
  signup_name = ""
  signup_email = "" 
  signup_password = ""

  showing = "login";

  @Output() onSignup = new EventEmitter();
  @Output() onLogin = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  validate_string(str, min) {
    if (str.length < min) {
      return false;
    }
    return true;
  }

  validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  validatePassword(password) {
    if (password.length < 6 || password.length > 16) {
      return false;
    }

    return true;
  };

  login() {
    if (!this.validateEmail(this.email)) {
      alert("Invalid Email, email format : someone@somewhere.com");
      return false;
    }
    if (!this.validatePassword(this.password)) {
      alert("Invalid Password, Password should be between 6 - 16 characters.");
      return false;
    }

    this.onLogin.emit({"email": this.email, "password": this.password});
  }

  signup() {

    if (!this.validate_string(this.signup_name, 4))  {
      alert("Invalid Name");
      return false;
    }

    if (!this.validateEmail(this.signup_email)) {
      alert("Invalid Email, email format : someone@somewhere.com");
      return false;
    }

    if (!this.validatePassword(this.signup_password)) {
      alert("Invalid Password, Password should be between 6 - 16 characters.");
      return false;
    }

    this.onSignup.emit({"name": this.signup_name, "email": this.signup_email, "password": this.signup_password});
  }

  show_signup() {
    this.showing = "signup";
  }

  show_login() {
    this.showing = "login";
  }
}
