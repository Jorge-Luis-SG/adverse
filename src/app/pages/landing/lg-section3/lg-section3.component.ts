import { Component, Input } from '@angular/core';
import { appAddClassOnScroll } from 'src/app/directives/appAddClassOnScroll.directive';
@Component({
  selector: 'app-lg-section3',
  templateUrl: './lg-section3.component.html',
  styleUrls: ['./lg-section3.component.css']
})

export class LgSection3Component {
  @Input() theme: boolean = false;
  reboteActivo: boolean = false;

  activarRebote() {
    this.reboteActivo = true;
  }

}
