import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
})
export class WordComponent implements OnInit {

  constructor() { }
  listAnimal = [];
  addAnimal(name: string) {
    this.listAnimal.unshift(name);
  }
  ngOnInit() {
  }
}
