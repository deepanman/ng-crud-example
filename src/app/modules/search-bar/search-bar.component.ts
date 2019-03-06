import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() searchText = new EventEmitter();

  search: FormControl = new FormControl();

  constructor() {
    this.search.valueChanges.subscribe((text) => this.searchText.emit(text));
  }

  ngOnInit() {
  }

}
