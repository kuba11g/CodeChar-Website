import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  backgroundVid:string = "assets/images/backgroundVid.mp4";
  backImg:string = "assets/images/backImg.jpg";
  frontImg:string = "assets/images/frontImg.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
