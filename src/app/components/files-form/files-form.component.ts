import { Component, OnInit } from '@angular/core';

declare const checkPassword:any;
@Component({
  selector: 'app-files-form',
  templateUrl: './files-form.component.html',
  styleUrls: ['./files-form.component.scss']
})
export class FilesFormComponent implements OnInit {
  instagramBotzLogo:string = "assets/images/InstagramBotz-Avatar.ico";
  spottyBottyLogo:string = "assets/images/SpottyBotty-Avatar.ico";
  messBotLogo:string = "assets/images/MessBot-Avatar.ico";
  autoClassJoinerLogo:string = "assets/images/AutoClassJoiner-Avatar.ico";
  constructor() { }

  ngOnInit(): void {
  }

}
