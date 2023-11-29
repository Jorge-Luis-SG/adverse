import { Injectable } from '@angular/core';
import { ListSocial } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataBasicService {

  constructor() { }
  listSocial: ListSocial[] = [
    {
      icon: 'tm',
      url: 'https://t.me/adversegames',
    },
    {
      icon: 'ig',
      url: 'https://www.instagram.com/adversegames/',
    },
    {
      icon: 'x',
      url: 'https://twitter.com/GamesAdverse',
    },
    
    {
      icon: 'reddit',
      url: 'https://www.reddit.com/user/adversegames/',
    },
    {
      icon: 'yt',
      url: 'https://www.youtube.com/@Adversegames',
    }
  ]
}
