import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-adv-component-status',
  templateUrl: './adv-component-status.component.html',
  styleUrls: ['./adv-component-status.component.css']
})
export class AdvComponentStatusComponent {
  @Input() title: string = '';
  @Input() number: number = 0;
  @Input() discount: number = 0;
  @Input() sold: number = 0;
  @Input() raised: string = '';
  @Input() active: boolean = false;
  @Input() end: boolean = false;
  @Input() theme: boolean = false;


}
