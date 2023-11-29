import { Component, AfterViewInit, Input } from '@angular/core';
import SwiperCore, { SwiperOptions, Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-lg-section1',
  templateUrl: './lg-section1.component.html',
  styleUrls: ['./lg-section1.component.css']
})
export class LgSection1Component {
  @Input() theme: boolean = false;
  valueData: number = 0;
  bSelect: string = 'eth';
  select(param: string) {
    this.bSelect = param;
  }
}

