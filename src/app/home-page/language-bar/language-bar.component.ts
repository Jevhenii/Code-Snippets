import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Languages} from '../models/temp.lenguages.enum';

@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.scss']
})
export class LanguageBarComponent implements OnInit {
  @Output() newSelectionMade = new EventEmitter<Languages>();

  selectedLanguages = new Set<Languages>();
  languageOptions = new Set<Languages>();
  showModal = false;
  readonly headerText = 'Select Language';
  newSelection: Languages;
  constructor() { }

  ngOnInit() {
    this.languageOptions.add(Languages.css);
    this.languageOptions.add(Languages.typescript);
  }

  updateNewSelection = (lang: Languages) => {
    this.newSelection = lang;
  }
  saveLanguage = () => {
    this.selectedLanguages.add(this.newSelection);
    this.newSelectionMade.emit(this.newSelection);
    this.showModal = false;
  }
  show = () => {
    this.showModal = true;
  }


}
