import { Component, Input, OnInit } from '@angular/core';
import { Wallet } from 'src/app/interfaces/interfaces';
import { AdPoolService } from 'src/app/services/ad-pool.service';


@Component({
  selector: 'app-lg-section4',
  templateUrl: './lg-section4.component.html',
  styleUrls: ['./lg-section4.component.css']
})
export class LgSection4Component implements OnInit {
  participants: Wallet[] = [];
  whiteList: Wallet[] = [];
  @Input() theme: boolean = false;
  constructor(private adPool: AdPoolService) { }
  ngOnInit(): void {
    this.participants = this.adPool.participants;
    this.whiteList = this.adPool.whiteList;
    console.log(this.participants)
  }


}
