import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snippet-adder',
  templateUrl: './snippet-adder.component.html',
  styleUrls: ['./snippet-adder.component.scss']
})
export class SnippetAdderComponent implements OnInit {
  name: string;
  descr: string;
  code: string;

  showModal = false;

  readonly headerText = 'Save Snippet';

  constructor() { }
  ngOnInit() {
  }

  addSnippet = () => {};
  openMadal = () => {
    this.showModal = true;
  }

}
