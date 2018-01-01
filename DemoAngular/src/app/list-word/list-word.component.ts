import { Component, OnInit, ViewChild } from '@angular/core';
import {WordComponent} from '../word/word.component';

@Component({
  selector: 'app-list-word',
  templateUrl: './list-word.component.html',
  styleUrls: ['./list-word.component.css'],
})
export class ListWordComponent implements OnInit {
  @ViewChild(WordComponent) word;
  constructor() { }

  ngOnInit() {
  }
  add() {
    this.word.addAnimal('con ga');
  }

}
