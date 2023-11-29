import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lg-section2',
  templateUrl: './lg-section2.component.html',
  styleUrls: ['./lg-section2.component.css']
})
export class LgSection2Component {
  @Input() theme: boolean = false;
}
