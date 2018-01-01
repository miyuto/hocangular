import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { ListWordComponent } from './list-word/list-word.component';
import {IpComponent} from './ip.component';
import {HttpModule} from '@angular/http';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroService} from './hero.service';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    ListWordComponent,
      IpComponent,
      HeroesComponent,
      HeroDetailComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpModule
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
