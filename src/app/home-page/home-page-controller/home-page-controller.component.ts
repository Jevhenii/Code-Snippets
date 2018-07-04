import { Component, OnInit } from '@angular/core';
import {Snippet} from '../models/snippet';
import {Languages} from '../models/temp.lenguages.enum';

@Component({
  selector: 'app-home-page-controller',
  templateUrl: './home-page-controller.component.html',
  styleUrls: ['./home-page-controller.component.scss']
})
export class HomePageControllerComponent implements OnInit {
  snippets = [
    new Snippet(
      'My snipshake',
      Languages.typescript,
      'Bring all boys to the yard',
      'let betterThenYours = true;'),
    new Snippet(
      'My snipshake',
      Languages.typescript,
      'Bring all boys to the yard',
      'let betterThenYours = true;'),
    new Snippet(
      'My snipshake',
      Languages.typescript,
      'Bring all boys to the yard',
      'let betterThenYours = true;'),
    new Snippet(
      'My snipshake',
      Languages.typescript,
      'Bring all boys to the yard',
      'let betterThenYours = true;'),
    new Snippet(
      'My snipshake',
      Languages.typescript,
      'Bring all boys to the yard',
      'let betterThenYours = true;'),
    new Snippet(
      'My snipshake',
      Languages.typescript,
      'Bring all boys to the yard',
      'let betterThenYours = true;'),
    new Snippet(
      'My snipshake',
      Languages.typescript,
      'Bring all boys to the yard',
      'let betterThenYours = true;')
  ]
  constructor() { }

  ngOnInit() {
  }

}
