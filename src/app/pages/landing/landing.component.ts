import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  dark: boolean = false;
  themeMode(param: boolean) {
    this.dark = param;
  }
  darkActiveHeader(event: boolean) {
    this.dark = event;
  }
}
