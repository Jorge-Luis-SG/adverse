import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListSocial } from 'src/app/interfaces/interfaces';
import { DataBasicService } from 'src/app/services/data-basic.service';



@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})

export class TopHeaderComponent {
  listSocial: ListSocial[] = []
  toggle: boolean = false;
  @Output() darkActive = new EventEmitter<boolean>();
  @Input() theme: boolean = false;

  constructor(private socialNetworks: DataBasicService) {
    this.listSocial = socialNetworks.listSocial;
  }
  toggleMenu(){
    this.toggle = !this.toggle;
  }
  themeMode(param:boolean){
    this.darkActive.emit(param)
  }


}
