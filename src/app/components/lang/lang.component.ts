import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.css']
})
export class LangComponent {
  lang: string;

  @Input() theme: boolean = false;
  setLanguage(lang: string) {
    localStorage.setItem('value', lang);
    this.lang = lang;
    this.translate.setDefaultLang(lang);
  }

  constructor(public translate: TranslateService) {
    this.lang = localStorage.getItem('value') || 'es';
    translate.addLangs(['en', 'es']);
    const lang = translate.getBrowserLang();
    if (lang !== 'es' && lang !== 'en') {
      translate.setDefaultLang(this.lang);
    }
    translate.setDefaultLang(this.lang);

  }
}
