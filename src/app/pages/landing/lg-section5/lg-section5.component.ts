import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lg-section5',
  templateUrl: './lg-section5.component.html',
  styleUrls: ['./lg-section5.component.css']
})
export class LgSection5Component {
  @Input() theme: boolean = false;
}
