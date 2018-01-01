import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero} from './hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1, name: 'Hero'
  };

  heroes = HEROES;

  selectedHero: Hero;
  onSelected(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor() { }

  ngOnInit() {
  }

}
