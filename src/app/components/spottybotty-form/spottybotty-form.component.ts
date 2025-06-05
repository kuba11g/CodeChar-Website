import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spottybotty-form',
  templateUrl: './spottybotty-form.component.html',
  styleUrls: ['./spottybotty-form.component.scss']
})
export class SpottybottyFormComponent implements OnInit {
  backgroundVid:string = "assets/images/backgroundVid.mp4";
  constructor() { }

  ngOnInit(): void {
  }

}
