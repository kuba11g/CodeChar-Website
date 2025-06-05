import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  backgroundVid:string = "assets/images/backgroundVid.mp4";
  backImg:string = "assets/images/backImg.jpg";
  frontImg:string = "assets/images/frontImg.jpg";
  
  constructor() { }

  ngOnInit(): void {
  }

}
