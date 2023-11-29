import { Component, Input } from '@angular/core';
import { ListSocial } from 'src/app/interfaces/interfaces';
import { DataBasicService } from 'src/app/services/data-basic.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  listSocial : ListSocial[] = [];
  @Input() theme: boolean = false;

  constructor(private socialNetworks:DataBasicService ){
    this.listSocial = socialNetworks.listSocial;
  }
}
