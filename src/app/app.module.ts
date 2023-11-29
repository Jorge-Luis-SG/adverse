import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { LgSection1Component } from './pages/landing/lg-section1/lg-section1.component';
import { LandingComponent } from './pages/landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'swiper/angular';
import { LgSection2Component } from './pages/landing/lg-section2/lg-section2.component';
import { AdvComponentStatusComponent } from './components/adv-component-status/adv-component-status.component';
import { LgSection3Component } from './pages/landing/lg-section3/lg-section3.component';
import { LgSection4Component } from './pages/landing/lg-section4/lg-section4.component';
import { LgSection5Component } from './pages/landing/lg-section5/lg-section5.component';
import { FooterComponent } from './components/footer/footer.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LangComponent } from './components/lang/lang.component';
import { appAddClassOnScroll } from './directives/appAddClassOnScroll.directive';

// Función para cargar los archivos de traducción
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    LgSection1Component,
    LandingComponent,
    LgSection2Component,
    AdvComponentStatusComponent,
    LgSection3Component,
    LgSection4Component,
    LgSection5Component,
    FooterComponent,
    LangComponent,
    appAddClassOnScroll
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
