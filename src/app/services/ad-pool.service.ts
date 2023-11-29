import { Injectable } from '@angular/core';
import { Wallet } from '../interfaces/interfaces';





@Injectable({
  providedIn: 'root'
})
export class AdPoolService {

  constructor() { }

  participants: Wallet[] = [
    {
      id: 124,
      wallet: '',
      selected: true,
    },
    {
      id: 224,
      wallet: ''
    },
    {
      id: 12,
      wallet: ''
    },
    {
      id: 4,
      wallet: '',
      selected: true,

    },
  ];

  whiteList:Wallet[]=[
    {
      id: 124,
      wallet: '',
      selected: true,

    },
    {
      id: 4,
      wallet: '',
      selected: true,

    },
  ]


}
