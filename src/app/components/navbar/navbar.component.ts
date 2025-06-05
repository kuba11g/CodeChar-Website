import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  theme: Theme = 'light-theme';
  logo:string = "assets/images/CodeChar-Avatar.ico";

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2    
  ) { }

  ngOnInit(): void {
    this.initializeTheme();
  }

  switchTheme() {
    this.document.body.classList.replace(
      this.theme, 
      this.theme === 'light-theme' 
      ? (this.theme = 'dark-theme') 
      : (this.theme = 'light-theme'));
  }

  initializeTheme = (): void => 
    this.renderer.addClass(this.document.body, this.theme);

}

export type Theme = 'light-theme' | 'dark-theme';